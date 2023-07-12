const todoCheckArr = document.querySelectorAll(".todo-check");
const todoSpanArr = document.querySelectorAll(".todo");

// let todoCheckCount = 0;
// 할 일 입력창 - 할 일 입력 후 엔터 누를 시
    // 나중에 동적 이벤트 할당하는 방식으로 바꿔야함
    // todoList가 엔터 누를 때마다 추가되야하기 때문에
document.getElementById("input-list").addEventListener("keyup", function() {

    if(window.event.keyCode == 13) {
        // todoSpanArr[todoCheckCount].innerText = this.value;
        // todoCheckCount++;

        // 엔터키가 눌리면 할 일 추가
        document.getElementById("list-box").innerHTML +=
        "<div class='todolist'><button class='todo-check fa-regular fa-circle-check' type='button'></button>" +
        "<span class='todo'>" + this.value + "</span><button class='todo-delete fa-solid fa-x' type='button'></button></div>";

        // 엔터키가 눌렸을 때 할 일 입력창 초기화
        this.value = "";
    }
});

// 한 번만 실행됨;;
// 반복문 or 여러번 스케줄?
$(document).on("click", ".todo-check", function(e) {

    // 할 일 선택 해제
    if($(e.target).css("color", "orange") == true) {
        $(e.target).css("color", "lightgray");
        $(e.target).next().css("textDecoration", "none");
        $(e.target).next().css("color", "black");
        count++;
    } 
    else { // 할 일 선택
        $(e.target).css("color", "orange");
        $(e.target).next().css("textDecoration", "line-through");
        $(e.target).next().css("color", "lightgray");
        count++;
    }
});

// function click_check() {
//     console.log();
    // if(e.style.color == "lightgray") {
    //     e.style.color = "orange";
    // }
// }

// 할 일 체크 버튼 클릭 시
// for(let i=0; i<todoCheckArr.length; i++) {
//     todoCheckArr[i].addEventListener("click", function() {

//             // 체크된 할 일 완료됐다고 표시
//             for(let i=0; i<todoCheckArr.length; i++) {
//                 if(todoCheckArr[i].style.color == "orange") {
//                    todoSpanArr[i].style.textDecoration = "line-through";
//                  todoSpanArr[i].style.color = "lightgray";
//                 }
//         } else {
//             this.style.color = "lightgray";
//             // 체크된 할 일 완료 표시 제거
//             for(let i=0; i<todoCheckArr.length; i++) {
//                 if(todoCheckArr[i].style.color == "orange") {
//                     todoSpanArr[i].style.textDecoration = "none";
//                     todoSpanArr[i].style.color = "black";
//                 }
//             }
//         }
        
//     });
// }

// document.querySelector('.todo-check').addEventListener("click", function(e) {
//     if(this.style.color == "lightgray") {
//         this.style.color = "orange";
//                     // 체크된 할 일 완료됐다고 표시
                    
//         if(todoCheckArr[i].style.color == "orange") {
//             todoSpanArr[i].style.textDecoration = "line-through";
//             todoSpanArr[i].style.color = "lightgray";
//         }
                
//     } else {
//         this.style.color = "lightgray";
//         // 체크된 할 일 완료 표시 제거
//             if(todoCheckArr[i].style.color == "orange") {
//                 todoSpanArr[i].style.textDecoration = "none";
//                 todoSpanArr[i].style.color = "black";
//             }
        
//     }
// });


//  All 버튼 클릭 시 
document.getElementById("btn-all").addEventListener("click", function() {


    // All 버튼 테두리 색 변경
    if(this.style.border == "1px solid lightgray") {
        this.style.border = "2px solid orange";

        // 선택되지 않은 할 일도 모두 선택되게 바꾸기
        $(".todo-check").css("color", "orange");
        $(".todo").css("textDecoration", "line-through");
        $(".todo").css("color", "lightgray");

        // for(let i=0; i<todoCheckArr.length; i++) {
        //     todoCheckArr[i].style.color = "orange";
        // }
    } else {
        // 한 번 더 누를 시
        this.style.border = "1px solid lightgray";
        $(".todo-check").css("color", "lightgray");
        $(".todo").css("textDecoration", "none");
        $(".todo").css("color", "black");
        // for(let i=0; i<todoCheckArr.length; i++) {
        //     todoCheckArr[i].style.color = 'lightgray';
        // }
    }



});

// Active 버튼 클릭 시
document.getElementById("btn-active").addEventListener("click", function() {
    if(this.style.borderColor == 'lightgray') {
        this.style.border = "2px solid orange";

        // 체크되지 않은 할 일 숨기기
        if($(".todo-check").css("color", "lightgray") == true) {

        }
    } else {
        // 한 번 더 누를 시 
        this.style.border = "1px solid lightgray";
        // 숨겨졌던 할 일 다시 나타내기
    }
});

// Completed 버튼 클릭 시 (완료된 할 일 리스트 띄우기)
document.getElementById("btn-completed").addEventListener("click", function() {
    if(this.style.borderColor == 'lightgray') {
        this.style.border = "2px solid orange";

        
    } else {
        this.style.border = "1px solid lightgray";

    }
});