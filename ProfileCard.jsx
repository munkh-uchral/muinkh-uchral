import React from "react";
import Card from "./Card";
import './ProfileCard.css';
function ProfileCard(props) {
    return (
        <Card title="Inje Lee" backgroundColor="#4ea04e">
            <p>안녕하세요, 오늘 일정을 알려드립니다. </p>
            <p>점심식사 시간입니다.</p>
            <p>이제 곧 미팅이 시작됩니다.</p>
        </Card>
    );
}
export default ProfileCard;