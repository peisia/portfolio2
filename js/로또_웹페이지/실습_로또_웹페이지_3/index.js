window.onload = function () {
    /************************************************/
    /* 선언부                                        */
    /************************************************/


    var playerLotto = [0, 0, 0, 0, 0, 0];       // 내 로또 번호 배열
    var lotto = [0, 0, 0, 0, 0, 0];             // 당첨 로또 번호를 넣을 배열

    var p1 = document.getElementById("p1");
    // p1.innerHTML = "고양이";
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    var p5 = document.getElementById("p5");
    var p6 = document.getElementById("p6");

    var ip1 = document.getElementById("ip1");
    var ip2 = document.getElementById("ip2");
    var ip3 = document.getElementById("ip3");
    var ip4 = document.getElementById("ip4");
    var ip5 = document.getElementById("ip5");
    var ip6 = document.getElementById("ip6");
    var btn = document.getElementById("btn");

    btn.onclick = btnClick; // 버튼 클릭 시 동작 시킬 함수 지정하기

    function btnClick() {   // 버튼 클릭 시 이 함수가 동작 함
        // 입력 번호를 플레이어 로또 배열에 넣기
        // debugger;

        //test
        ip2.style.backgroundColor = "pink";

        playerLotto[0] = ip1.value;
        playerLotto[1] = ip2.value;
        playerLotto[2] = ip3.value;
        playerLotto[3] = ip4.value;
        playerLotto[4] = ip5.value;
        playerLotto[5] = ip6.value;

        runLotto(); // 당첨 확인 처리(이전 당첨 확인 처리 부분을 여기다 다 넣어버림)
    }


    //todo 여기 설명 중

    function runLotto() {
        /************************************************/
        /* 당첨 번호 처리                                */
        /************************************************/
        /* 첫번째 번호 처리 */
        var r = Math.floor(Math.random() * 45 + 1); // 1~45 사이의 랜덤 번호 뽑기
        lotto[0] = r;   // 뽑은거 첫번째 로또 칸에 적기
        var temp = 0;   // 컴퓨터가 뽑은 임리 로또 번호를 저장 할 변수

        /* 두번째 번호 처리 */
        aaa:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            /* 중복검사 */
            for (var i = 0; i < 6; i++) {
                if (lotto[i] == temp) {
                    continue aaa;       // 중복이면 컨티뉴 aaa 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[1] = temp;    // 값 넣어주고    
            break;  // 반복문을 빠져나가기
        }

        /* 세번째 번호 처리 */
        bbb:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            //중복검사
            for (var i = 0; i < 6; i++) {
                if (lotto[i] == temp) {
                    continue bbb;       // 중복이면 컨티뉴 bbb 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[2] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /* 네번째 번호 처리 */
        ccc:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            //중복검사
            for (var i = 0; i < 6; i++) {
                if (lotto[i] == temp) {
                    continue ccc;   // 중복이면 컨티뉴 ccc 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[3] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /* 다섯번째 번호 처리 */
        ddd:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            //중복검사
            for (var i = 0; i < 6; i++) {
                if (lotto[i] == temp) {
                    continue ddd;   // 중복이면 컨티뉴 ddd 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[4] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }

        /* 여섯번째 번호 처리 */
        eee:
        while (true) {
            temp = Math.floor(Math.random() * 45 + 1);
            //중복검사
            for (var i = 0; i < 6; i++) {
                if (lotto[i] == temp) {
                    continue eee;   // 중복이면 컨티뉴 eee 라벨 가서 처음부터 다시 하게 함.
                }
            }
            //여기까지 무사히 왔다는건 중복이 없다는 뜻이므로
            lotto[5] = temp;    // 값 넣어주고
            break;  // 반복문을 빠져나가기
        }


        /************************************************/
        /* 당첨 번호 출력부 */
        /************************************************/        
        //case 1
        // dw("당첨번호: ");
        p1.innerHTML = "당첨번호";        
        //case 2
        // ih(p1, "당첨번호: ");
        
        var ts = "";    // 1. 빈 문자열 변수 선언(만들어 놓기)
        for (var i = 0; i < lotto.length; i++) {
            // dw(lotto[i] + " ");      // *. 기존 코드
            ts = ts + (lotto[i] + " "); // 2. 문자열 변수에 문자열 누적시키기     
        }
        p2.innerHTML = ts;  // 3. 실제로 찍기
        
        // ih(p2, ts);

        // br();

        // dw("당신의 번호: ");    


        
        // ts = "당신의 번호: ";        
        
        

        p3.innerHTML = "당신의 번호: ";


        var ts4 = "";

        for (var i = 0; i < 6; i++) {
            // dw(playerLotto[i] + " ");    //기존 코드
            // ts += (playerLotto[i] + " ");   //새 코드
            ts4 = ts4 + (playerLotto[i] + " ");   //새 코드
        }
        p4.innerHTML = ts4;

        // ih(p3, ts);

        // br();

        /************************************************/
        /* 플레이어 로또와 컴퓨터 로또를 비교하여 등수 처리 */
        /************************************************/

        /* case 1 */
        // var okCount = 0;
        // for(var i=0;i<6;i++){    
        //     for(var j=0;j<6;j++){
        //         if(lotto[i] == playerLotto[j]){ // 플레이어 로또 중 컴퓨터 로또와 일치하는게 있으면            
        //             okCount = okCount + 1;  // 당첨 카운트를 1 증가(맞춤 표시 1개 증가)
        //             break;
        //         }
        //     }
        // }

        /* case 2 */
        var okCount = 0;
        for (var i = 0; i < 6; i++) {
            if (playerLotto[i] == lotto[0]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                okCount = okCount + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (playerLotto[i] == lotto[1]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                okCount = okCount + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (playerLotto[i] == lotto[2]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                okCount = okCount + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (playerLotto[i] == lotto[3]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                okCount = okCount + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (playerLotto[i] == lotto[4]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                okCount = okCount + 1;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (playerLotto[i] == lotto[5]) {  // 당첨로또 첫번째랑 내꺼랑 비교
                okCount = okCount + 1;
            }
        }

        // dw("맞춘 갯수:" + okCount); br();

        p5.innerHTML = "맞춘 갯수:" + okCount;

        // ih(p4, "맞춘 갯수:" + okCount);

        // br();


        /************************************************/
        /* 등수 화면 표시 */
        /************************************************/
        switch (okCount) {
            case 3:
                // dw("5등입니다.");
                // ih(p5, "5등입니다.");
                p6.innerHTML = "5등입니다.";
                break;
            case 4:
                // dw("4등입니다.");
                // ih(p5, "4등입니다.");
                p6.innerHTML = "4등입니다.";
                break;
            case 5:
                // dw("3등입니다.");
                // ih(p5, "3등입니다.");
                p6.innerHTML = "3등입니다.";
                break;
            case 6:
                // dw("1등입니다.");
                // ih(p5, "1등입니다.");
                p6.innerHTML = "1등입니다.";
                break;
            default:
                // dw("꽝입니다.")
                // ih(p5, "꽝입니다.")
                p6.innerHTML = "꽝입니다.";
                break;
        }
        
    }
}