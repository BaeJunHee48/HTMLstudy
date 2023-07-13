window.onload = function () {
    // 상단 스크롤 기능
    const header = document.querySelector(".header");
    const mbt = document.querySelector(".mbt");
    let scy = 0;
    // 1.스크롤바의 픽셀 위치값을 파악해서
    scy = window.document.documentElement.scrollTop;
    // 2.class적용
    if (scy > 0) {
        header.classList.add("active");
        mbt.classList.add("active");
    }
    window.addEventListener("scroll", function () {
        scy = this.document.documentElement.scrollTop;
        if (scy > 0) {
            header.classList.add("active");
            mbt.classList.add("active");
        } else {
            const state = navMb.classList.contains("active");
            if (state) {
                // 만약에 모바일 메뉴가 펼쳐진 상태라면
                header.classList.add("active");
                mbt.classList.add("active");
            } else {
                // 그렇지 않다면 원래대로 처리하고..
                header.classList.remove("active");
                mbt.classList.remove("active");
            }
        }
    });
    // 모바일 메뉴 클릭 처리
    const htmlRoot = document.querySelector("html");
    const navMb = document.querySelector(".nav-mb");
    mbt.addEventListener("click", function () {
        // 현재 ani클래스가 있는지 없는지 파악
        const state = this.classList.contains("ani");
        if (state) {
            this.classList.remove("ani");
            // 윈도우에 스크롤바가 나타납니다.
            htmlRoot.classList.remove("active");
            // 모바일 메뉴 숨기기
            navMb.classList.remove("active");
            if (scy > 0) {
                header.classList.add("active");
                mbt.classList.add("active");
            } else {
                header.classList.remove("acitve");
                mbt.classList.remove("active");
            }
        } else {
            this.classList.add("ani");
            htmlRoot.classList.add("active");
            navMb.classList.add("active");
            header.classList.add("active");
            mbt.classList.add("active");
        }
    });
    //반응형 처리
    let winw = window.innerWidth;
    window.addEventListener("resize", function () {
        winw = window.innerWidth;
        if (winw > 1024) {
            mbt.classList.remove("ani");
            htmlRoot.classList.remove("active");
            navMb.classList.remove("active");
            if (scy > 0) {
                header.classList.add("active");
                mbt.classList.add("active");
            } else {
                header.classList.remove("active");
                mbt.classList.remove("active");
            }
        }
    });
};
