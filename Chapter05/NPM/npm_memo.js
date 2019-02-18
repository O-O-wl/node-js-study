
/** ==================================================
                        @NPM
 Node Package Manager - 배포된 모듈 관리하는 매니저

 =====================================================*/
/*================================================================================
                                - 주의사항 -
        npm 으로 패키지 import 시 package.json 이 있는 디렉터리에서 import 해야함

==================================================================================*/

// npm init
// - 패키지 생성


// npm install(i) express
// - 'express' 패키지 import
/**=================================================================
 *                          @OPTION
 * @save-dev(--save-dev)/(-D): 배포에서는 사용하지않고 , 개발 에서만 사용)
 * @global (-g): 전역으로 터미널에서 명령어로 사용할 수 있게 하는 옵
 * @express(@4.14.0) : 특정 지정된 버전 설치
 *================================================================ */

/** ==========================================================================
                            @Result
 * @package.json 에 추가됨
 * @node_modules 라는 디렉터리 추가 -- 'express' 에서 사용하는 패키지 모듈도 같이 설치된다.
 * @package-lock.json 에는 install 한 모듈이 사용하는 모듈의 버전들이 다 적혀있다.
 * @package.json - 'main' 은 진입점 Ex) "main":"index.js"
 =============================================================================*/

//npm outdated
// 업데이트가 가능한 버전 명시
//Package  Current  Wanted  Latest  Location
//express   4.14.0  4.16.4  4.16.4  package_o-o-wl



// npm update (module)
// module 업데이트 -- 명시되있는 버전까지 - SemVer 참조

/** ==================================================================================
                        @Semantic_Versioning(SemVer)
            -  방식으로 표현 (0.0.0) -(major.minor.patch)세자리로 구성
                      @patch - 버그수정 - Bug Fix
                      @minor - 신기능
                      @major - 대규모 업데이트 (고장 가능성 존재)

            @캐럿 ^   : minor,patch 업그레이드 허용
            @물결 ~   : patch 업그레이드만 허용
            @부등호 >  : 버전의 조건

* ===================================================================================*/

// npm remove (rm) module
// 모듈 삭제


// npm search module
// module 검색


// npm info module
// module 의 package.json 정보 출력


// npm ls module
// 나의 패키지에서 module 이 어떤 dependency 에 설치되어 있는지 출력
/**===========================================================================
                               @Example
    npm ls base

    package_o-o-wl@1.0.0 /Users/ldcpaul/WebstormProjects/Node_js/Chapter05/NPM/Test
       └─┬ jest@24.1.0
         └─┬ jest-cli@24.1.0
           └─┬ micromatch@3.1.10
             └─┬ snapdragon@0.8.2
               └── base@0.11.2
===============================================================================*/

// npm version (patch) / 0.0.0
// 버전 설정 - 옵션으로 특정영역만 한단계 상승



// package 배포하기
// https://npmjs.com
/**============================================================================
  @NO1  - npm adduser -> Login
  @NO2  - npm whoami  //  누가 로그인 했는지  // npm logout
  @NO3  - 버전 설정 -> package.json 에서 수정
  @NO4  - npm publish -> 배포
===============================================================================*/

// npm unpublish module --force
// 24시간내에만 삭제