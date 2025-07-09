import java.sql.*;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;

public class BookingViewer {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/bookingdb";
    private static final String USER = "root";
    private static final String PASS = "Tushar904904";

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Booking Data Viewer");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

            // Table columns
            String[] columns = {"Booking ID", "Customer Name", "Email", "Seat Number", "Show Title", "Booking Time"};
            DefaultTableModel model = new DefaultTableModel(columns, 0);
            JTable table = new JTable(model);
            JScrollPane scrollPane = new JScrollPane(table);

            frame.add(scrollPane);

            frame.setSize(800, 400);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);

            // Load data from database
            loadBookingData(model);
        });
    }

    private static void loadBookingData(DefaultTableModel model) {
        String query = "SELECT b.booking_id, c.name, c.email, s.seat_number, sh.title, b.booking_time " +
                       "FROM Bookings b " +
                       "JOIN Customers c ON b.customer_id = c.customer_id " +
                       "JOIN Seats s ON b.seat_id = s.seat_id " +
                       "JOIN Shows sh ON b.show_id = sh.show_id";

        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             PreparedStatement ps = conn.prepareStatement(query);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Object[] row = {
                    rs.getInt("booking_id"),
                    rs.getString("name"),
                    rs.getString("email"),
                    rs.getString("seat_number"),
                    rs.getString("title"),
                    rs.getTimestamp("booking_time")
                };
                model.addRow(row);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            JOptionPane.showMessageDialog(null, "Error loading data: " + e.getMessage());
        }
    }
}
