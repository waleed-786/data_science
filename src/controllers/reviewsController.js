const { sql, poolPromise } = require('../config/db');

// POST a new review (CREATE)
exports.addReview = async (req, res) => {
    try {
        const { stall_id, user_id, rating, comment } = req.body;
        const pool = await poolPromise;
        
        const query = `
            INSERT INTO REVIEWS (stall_id, user_id, rating, comment)
            OUTPUT INSERTED.*
            VALUES (@stall_id, @user_id, @rating, @comment)
        `;
        
        const request = pool.request();
        request.input('stall_id', sql.Int, stall_id);
        request.input('user_id', sql.Int, user_id);
        request.input('rating', sql.Int, rating);
        request.input('comment', sql.VarChar, comment);

        const result = await request.query(query);
        
        res.status(201).json({ 
            status: 'success', 
            message: 'Review successfully added!',
            data: result.recordset[0] 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};

// PUT to update an existing review (UPDATE)
exports.updateReview = async (req, res) => {
    try {
        const reviewId = req.params.id; // Gets the ID from the URL
        const { rating, comment } = req.body;
        const pool = await poolPromise;

        const query = `
            UPDATE REVIEWS 
            SET rating = @rating, comment = @comment
            OUTPUT INSERTED.*
            WHERE id = @id
        `;

        const request = pool.request();
        request.input('id', sql.Int, reviewId);
        request.input('rating', sql.Int, rating);
        request.input('comment', sql.VarChar, comment);

        const result = await request.query(query);

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ status: 'error', message: 'Review not found' });
        }

        res.status(200).json({
            status: 'success',
            message: 'Review successfully updated!',
            data: result.recordset[0]
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};

// DELETE a review (DELETE)
exports.deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const pool = await poolPromise;

        const query = `DELETE FROM REVIEWS WHERE id = @id`;
        const request = pool.request();
        request.input('id', sql.Int, reviewId);

        const result = await request.query(query);

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ status: 'error', message: 'Review not found' });
        }

        res.status(200).json({
            status: 'success',
            message: 'Review successfully deleted!'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};