const { sql, poolPromise } = require('../config/db');

// GET all menus with a JOIN to the STALLS table
exports.getAllMenus = async (req, res) => {
    try {
        const pool = await poolPromise;
        
        // This satisfies the assignment's JOIN requirement
        const query = `
            SELECT 
                m.id AS menu_id, 
                m.name AS menu_name, 
                m.price, 
                m.is_available,
                s.name AS stall_name,
                s.location AS stall_location
            FROM MENU_ITEMS m
            INNER JOIN STALLS s ON m.stall_id = s.id
        `;
        
        const result = await pool.request().query(query);
        
        res.status(200).json({ 
            status: 'success', 
            total_items: result.recordset.length,
            data: result.recordset 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};