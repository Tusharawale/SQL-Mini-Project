import java.sql.*;
import javax.swing.*;

public class BookingForm {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/bookingdb";
    private static final String USER = "root";
    private static final String PASS = "Tushar904904";

    public static void main(String[] args) {
        JFrame frame = new JFrame("Booking Form");

        JLabel lblName = new JLabel("Customer Name:");
        JLabel lblEmail = new JLabel("Email:");
        JLabel lblShowID = new JLabel("Show ID:");
        JLabel lblSeatID = new JLabel("Seat ID:");

        JTextField txtName = new JTextField();
        JTextField txtEmail = new JTextField();
        JTextField txtShowID = new JTextField();
        JTextField txtSeatID = new JTextField();

        JButton btnBook = new JButton("Book");

        lblName.setBounds(30, 30, 100, 30);
        txtName.setBounds(150, 30, 200, 30);

        lblEmail.setBounds(30, 70, 100, 30);
        txtEmail.setBounds(150, 70, 200, 30);

        lblShowID.setBounds(30, 110, 100, 30);
        txtShowID.setBounds(150, 110, 200, 30);

        lblSeatID.setBounds(30, 150, 100, 30);
        txtSeatID.setBounds(150, 150, 200, 30);

        btnBook.setBounds(150, 200, 100, 30);

        frame.add(lblName); frame.add(txtName);
        frame.add(lblEmail); frame.add(txtEmail);
        frame.add(lblShowID); frame.add(txtShowID);
        frame.add(lblSeatID); frame.add(txtSeatID);
        frame.add(btnBook);

        frame.setSize(400, 300);
        frame.setLayout(null);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        btnBook.addActionListener(e -> {
            String name = txtName.getText().trim();
            String email = txtEmail.getText().trim();
            String showIdText = txtShowID.getText().trim();
            String seatIdText = txtSeatID.getText().trim();

            // Input validation
            if (name.isEmpty() || email.isEmpty() || showIdText.isEmpty() || seatIdText.isEmpty()) {
                JOptionPane.showMessageDialog(frame, "Please fill in all fields.");
                return;
            }

            int showID, seatID;
            try {
                showID = Integer.parseInt(showIdText);
                seatID = Integer.parseInt(seatIdText);
            } catch (NumberFormatException nfe) {
                JOptionPane.showMessageDialog(frame, "Show ID and Seat ID must be valid integers.");
                return;
            }

            try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
                conn.setAutoCommit(false); // Transaction start

                // Check if seat is available (Optional enhancement)
                String checkSeatSql = "SELECT is_available FROM Seats WHERE seat_id = ? AND is_available = TRUE";
                try (PreparedStatement psCheckSeat = conn.prepareStatement(checkSeatSql)) {
                    psCheckSeat.setInt(1, seatID);
                    ResultSet rsSeat = psCheckSeat.executeQuery();
                    if (!rsSeat.next()) {
                        JOptionPane.showMessageDialog(frame, "Selected seat is not available.");
                        conn.rollback();
                        return;
                    }
                }

                // Insert customer
                String sqlCustomer = "INSERT INTO Customers (name, email) VALUES (?, ?)";
                PreparedStatement psCustomer = conn.prepareStatement(sqlCustomer, Statement.RETURN_GENERATED_KEYS);
                psCustomer.setString(1, name);
                psCustomer.setString(2, email);
                psCustomer.executeUpdate();

                ResultSet rs = psCustomer.getGeneratedKeys();
                int customerID = 0;
                if (rs.next()) {
                    customerID = rs.getInt(1);
                } else {
                    throw new SQLException("Failed to retrieve customer ID.");
                }

                // Insert booking
                String sqlBooking = "INSERT INTO Bookings (customer_id, show_id, seat_id) VALUES (?, ?, ?)";
                PreparedStatement psBooking = conn.prepareStatement(sqlBooking);
                psBooking.setInt(1, customerID);
                psBooking.setInt(2, showID);
                psBooking.setInt(3, seatID);
                psBooking.executeUpdate();

                // Mark seat as unavailable
                String updateSeatSql = "UPDATE Seats SET is_available = FALSE WHERE seat_id = ?";
                PreparedStatement psUpdateSeat = conn.prepareStatement(updateSeatSql);
                psUpdateSeat.setInt(1, seatID);
                psUpdateSeat.executeUpdate();

                conn.commit();

                JOptionPane.showMessageDialog(frame, "Booking Successful!");

            } catch (Exception ex) {
                ex.printStackTrace();
                JOptionPane.showMessageDialog(frame, "Error: " + ex.getMessage());
            }
        });
    }
}
