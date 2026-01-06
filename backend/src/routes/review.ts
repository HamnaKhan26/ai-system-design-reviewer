import { Router } from "express";
import {reviewDesign} from "../reviewers/designReviewer";

const router = Router();

router.post("/", async (req, res) => {
    const { design } = req.body;
    if (!design) {
        return res.status(400).json({ error: "Design content is required." });
    }

    try {
        const review = await reviewDesign(design);
        res.json({ review });
    } catch (error) {
        res.status(500).json({ error: "Failed to review design." });
    }
});
export default router;
