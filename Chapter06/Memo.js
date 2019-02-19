// npm i -g express-generator


// =================== express 생성 =====================//

// express [ 생성할 디렉터리] --view=pug

// npm install

//========================================================//


/** =====================================================
                     @package.json

 @scripts - 사용자 정의 명령어 - npm run 명령어 - 저장된 명령실행
 =======================================================*/


/*=======================================================
                        M E M O

                 ./bin/www - 서버 실행부





=========================================================*/


/** ********************    METHOD   ****************************** **/


/**==================================================================
 *
                            @app.set()
                    : 익스프레스에 대한 설정 || 값 저장 메소드

                             @example

            app.set('views', path.join(__dirname, 'views'));
                         -> views 폴더 지정

            app.set('view engine', 'pug');
                         -> pug 가 html 대체

 ======================================================================= */



/** ===================================================================================
 *
                                @app.use()
                        : 미들웨어를 장착 해주는 메소드
                    여러개의 미들웨어를 한번의 use()에 모두 넣을수도 있다.


                                @미들웨어
            : 미들웨어는 운영 체제에서 제공되지 않는 서비스를 애플리케이션에 제공하는 소프트웨어

                                @example
                        app.use(logger('dev'));
                        app.use(cookieParser());
                app.use(express.static(path.join(__dirname, 'public')));

                        app.use('/', indexRouter);
                        app.use('/users', usersRouter);
                app.use(function(req, res, next) {next(createError(404));});

                                 @Process
                           요청 -> 미들웨어 -> 응답


                app.use((req,res,next)=>{
                        console.log('미들웨어 ')
                            next();})

============================================================================================ */


/** ===========================================================================================
                             @app.res.method('url',(req,res)=>{})

                    - 요청메소드가 'GET' 이고 주소는 'url' 인 요청만 걸리는 미들웨어 -

                            @app.options - CORS 인증시
 =============================================================================================*/