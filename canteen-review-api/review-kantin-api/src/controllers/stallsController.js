const { sql, poolPromise } = require('../config/db');

// GET all stalls with filtering and pagination
exports.getAllStalls = async (req, res) => {
    try {
        const pool = await poolPromise;
        
        // Pagination logic
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5; 
        const offset = (page - 1) * limit;
        
        // Filtering logic
        const category = req.query.category;

        let query = `SELECT * FROM STALLS`;
        const request = pool.request();

        // Add filter if category is provided in the URL
        if (category) {
            query += ` WHERE category = @category`;
            request.input('category', sql.VarChar, category);
        }

        // Add sorting and pagination (Required by SQL Server for OFFSET)
        query += ` ORDER BY id OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY`;
        request.input('offset', sql.Int, offset);
        request.input('limit', sql.Int, limit);

        const result = await request.query(query);
        
        res.status(200).json({ 
            status: 'success', 
            page: page,
            limit: limit,
            data: result.recordset 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};

