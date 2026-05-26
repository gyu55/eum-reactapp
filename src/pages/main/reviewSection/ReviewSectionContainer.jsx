import React from "react";
import ReviewSectionComponent from "./ReviewSectionComponent";
import { REVIEWS } from "./constants";

const ReviewSectionContainer = () => {
  // ── 백엔드 연동 시 아래 주석 해제 ──────────────────
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:10000/api/reviews")
  //     .then(res => res.json())
  //     .then(data => setReviews(data.reviews));
  // }, []);
  // ────────────────────────────────────────────────

  return <ReviewSectionComponent reviews={REVIEWS} />;
};

export default ReviewSectionContainer;