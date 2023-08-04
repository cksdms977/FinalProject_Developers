const nonClick = document.querySelectorAll(".non-click");

function handleClick(event) {
  // div에서 모든 "click" 클래스 제거
  nonClick.forEach((e) => {
    e.classList.remove("click");
  });
  // 클릭한 div만 "click"클래스 추가
  event.target.classList.add("click");
}

nonClick.forEach((e) => {
  e.addEventListener("click", handleClick);
});











//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// 페이지 로드 후 실행
window.onload = function() {
	const likeCheckbox = document.querySelector('.like');
	const heartCount = document.querySelector('.heart_count');

	// like 체크박스를 클릭했을 때 이벤트 처리
	likeCheckbox.addEventListener('click', function() {
		// 현재 하트 카운트 값 가져오기
		let count = parseInt(heartCount.textContent, 10);

		// 체크박스가 체크되어 있는지 확인
		if (this.checked) {
			// 체크되어 있다면 하트 카운트 증가
			count++;
		} else {
			// 체크되어 있지 않다면 하트 카운트 감소 (최소값 0으로 제한)
			count = Math.max(count - 1, 0);
		}

		// 변경된 하트 카운트 값을 업데이트
		heartCount.textContent = count;
	});
};

 function updateFoodList(sortFilter) {
    $.ajax({
      type: "GET",
      url: "/food/list", // 서버에서 맛집 리스트를 가져올 URL
      data: { sortFilter: sortFilter }, // 클릭한 <li> 태그의 id 값을 전달
      success: function (data) {
        // 서버로부터 받은 데이터를 이용하여 맛집 리스트를 업데이트
        $(".food_main_list").html(data);
      },
      error: function (error) {
        console.error("Error occurred while fetching data:", error);
      }
    });
  }

  // <li> 태그 클릭 이벤트 핸들러 등록
  $(document).ready(function () {
    $("#all").click(function (e) {
      updateFoodList("all"); // "제목순" 클릭 시
      e.propagationStop();
    });

    $("#popular").click(function (e) {
      updateFoodList("popular"); // "좋아요순" 클릭 시
      e.propagationStop();
    });

    $("#review").click(function (e) {
      updateFoodList("review"); // "리뷰순" 클릭 시
      e.propagationStop();
    });
  });


	/*ajax*/
    function updateFoodList(sortFilter) {
        $.ajax({
            type: "GET",
            url: "/food/list",
            data: { sortFilter: sortFilter },
            success: function(data) {
                $(".food_main_list").html(data);
            },
            error: function(error) {
                console.error("111", error);
            }
        });
    }

    $(document).ready(function() {
        $("#all").click(function() {
            updateFoodList("all");
        });

        $("#popular").click(function() {
            updateFoodList("popular");
        });

        $("#review").click(function() {
            updateFoodList("review");
        });
    });
    

// 제목순 메뉴 클릭 시 처리
  document.getElementById("all").addEventListener("click", function () {
    resetActiveMenu(); // 모든 메뉴 스타일 초기화
    this.querySelector(".title").classList.add("active"); // 현재 메뉴에 active 클래스 추가
    // 추가적으로 제목순에 해당하는 동작 처리 (원하는 동작이 있을 경우 여기에 추가)
  });

  // 조회순 메뉴 클릭 시 처리
  document.getElementById("popular").addEventListener("click", function () {
    resetActiveMenu(); // 모든 메뉴 스타일 초기화
    this.querySelector(".title").classList.add("active"); // 현재 메뉴에 active 클래스 추가
    // 추가적으로 조회순에 해당하는 동작 처리 (원하는 동작이 있을 경우 여기에 추가)
  });

  // 리뷰순 메뉴 클릭 시 처리
  document.getElementById("review").addEventListener("click", function () {
    resetActiveMenu(); // 모든 메뉴 스타일 초기화
    this.querySelector(".title").classList.add("active"); // 현재 메뉴에 active 클래스 추가
    // 추가적으로 리뷰순에 해당하는 동작 처리 (원하는 동작이 있을 경우 여기에 추가)
  });

  // 모든 메뉴 스타일을 초기화하는 함수
  function resetActiveMenu() {
    const menuItems = document.querySelectorAll(".menu_style .title");
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
  
  
  
  
  
  
  
  
  
  