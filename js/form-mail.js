emailjs.init({
	publicKey: "6LjpI8nhzR5ImAiyx"
});

/*
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
	// these IDs from the previous steps
	emailjs.sendForm("service_cl2vkl5", "template_la0d34r", this).then(
		() => {
			console.log("SUCCESS!");
		},
		error => {
			console.log("FAILED...", error);
		}
	);
});
*/

//form선택자 변수 등록
const form = document.querySelector("#contact-form");
const user_name = form.querySelector("[name=user_name]");
const user_email = form.querySelector("[name=user_email]");
const message = form.querySelector("textarea");

form.addEventListener("submit", event => {
	event.preventDefault();

	//3개 중에 하나라도 입력항목이 비어있으면 경고장 출력하면서 메인 전송 중지
	if (!user_name.value.trim() || !user_email.value.trim() || !message.value.trim()) return alert("모든 입력 항목을 작성해주세요!");

	emailjs.sendForm("service_cl2vkl5", "template_la0d34r", form).then(
		() => {
			user_name.value = "";
			user_email.value = "";
			message.value = "";
			alert("문의 내용이 성공적으로 전달되었습니다.");
		},
		error => {
			alert("문의내용 전송에 실패했습니다.");
		}
	);
});
