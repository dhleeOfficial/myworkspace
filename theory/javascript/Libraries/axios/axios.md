# Axios
    - 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리

    - 기능
        - 운영 환경에 따라 브라우저의 XMLHttpRequest 객체 ( 클라이언트 ) 또는 Node.js의 HTTP API 사용 ( 서버 )
        - Promise API 지원
        - 요청 / 응답 차단 및 데이터 변환
        - 취소 요청
        - JSON 데이터 자동 변환
        - 사이트 간 요청 위조 ( XSRF ) 보호를 위한 클라이언트 사이드 지원

    - in React
        - HTTP Client ( HTTP 상에서 커뮤니케이션을 하는 자바 기반 컴포넌트 )를 내장하고 있는 Angular와 다르게, React는 따로 내장 클래스가 존재하지 않음
        - 따라서 React에서 AJAX를 구현하려면 자바스크립트의 내장 객체인 XMLRequest를 사용하거나, 다른 HTTP Client를 사용해야함
        - Fetch API 또는 Axios 라이브러리를 사용한다.

    - Fetch API와 비교
        - 일반적으로 자바스크립트에서 API를 연동하기 위해 사용
        - 자바스크립트 내장 라이브러리
        - example>
            // fetch
            const url = 'http://localhost:3000/test'
            const option = {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json';charset=UTP-8'
                },
                body: JSON.stringify({ name: 'dhlee', age: 30 })
            }

            fetch(url, option).then(response => console.log(response))

            // axios
            const options = {
                url: 'http://localhost:3000/test',
                method: 'POST',
                header: {
                    'Accept': 'appication/json',
                    'Content-Type': 'application/json';charset=UTP-8
                },
                data: {
                    name: 'dhlee',
                    age: 20
                }
            }

            axios.(options).then(response => consoloe.log(response))
            - 차이점
                - Fetch는 body 프로퍼티를 사용하고, axios는 data 프로퍼티를 사용
                - Fetch의 url이 Fetch함수의 인자로 들어가고, axios는 option 객체로 들어감
                - Fetch에서 body 부분은 stringify()로 됨
            - axios는 HTTP 통신의 요구사항을 컴팩트한 패키지로써 사용하기 편리함!
    
    - 설치
        - npm
            - npm install axios
            - yan add axios
        - cdn
            - 브라우저 환경에 설치 및 사용하는 방법
            - <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    - 사용법
        - GET 요청
            const axios = require('axios') or import axios from 'axios'

            axios.get('/user?ID=12345')
                .then(response => {
                    // 응답 성공
                    console.log(response);
                })
                .catch(error => {
                    // 응답 실패
                    console.log(error);
                })
                .then(function() {
                    // 응답 항상 실행
                })

            OR

            axios.get('/user', {
                params: {
                    ID: 12345
                }
            })
            
            - async / await
                - 함수 또는 메서드 앞에 async 키워드를 사용하고 내부에 await 키워드를 사용하여 비동기 통신 요청을 처리한다.
                - 오류 디버깅을 위해 try...catch 구문 사용할 것!
                - IE를 포함한 오래된 브라우저는 지원하지 않을 수 있음
                - example>
                    async function getUser() {
                        try {
                            const response = await axios.get('/user?ID=12345');

                            console.log(response);
                        } catch (err) {
                            console.log(err)
                        }
                    }
        - POST 요청
            axios.post('/user', {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        - 멀티 요청
            - 여러 개의 요청을 동시 수행할 경우 axios.all() 메서드를 사용
            - example>
                function getUserAccount() {
                    return axios.get('/user/12345')
                }

                function getUserPerm() {
                    return axios.get('/user/12345/perm')
                }

                axios.all([ getUserAccount(), getUserPerm() ])
                    .then(axios.spread(function(account, perm) {
                        // Both requests are now complete
                    })) 

    - API
        - cofig 설정을 통해 axios()에 전달하여 요청할 수 있다.
        - example>
            // POST 요청
            axios({
                method: 'post',
                url: '/user/123',
                data: {
                    firstName: 'Fred',
                    lastName: 'Flinstone'
                }
            })

            // 원격 이미지 GET 요청
            axios({
                method: 'get',
                url: 'http://bit.ly/2mTM3nY',
                responseType: 'stream'
            })
            .then(res => {
                res.data.pipe(fs.createWriteStream('image.jpg'))
            })
        - HTTP 메서드 별칭
            - 지원되는 HTTP 메서드에 별칭이 제공됨
            - axios.get, axios.post 등
            - 이것을 사용하면 설정에서 url, method, data 속성을 지정할 필요가 없다!
        - 동시성 ( Concurrency )
            - 동시 요청 처리를 위한 헬퍼 함수
                - axios.all(iterable)
                - axios.spread(callback)
        - 인스턴스 생성
            - .create() 메서드를 사용하여 사용자 정의 구성을 사용하는 axios 인스턴스를 생성할 수 있다.
            - example>
                const inst = axios.create({
                    baseURL: 'https://some-domain.com/api/',
                    headers: {
                        'X-Custom-Header': 'foobar'
                    },
                    timeout: 1000,
                })
        - config 옵션
            - url 속성만 필수이며, 나머지 속성은 옵션
            - method가 정의되지 않으면 요청은 GET으로 기본 요청!
            {
                url: '/user',                                                   /* url은 요청에 사용될 서버 URL */
                method: 'get',                                                  /* http method 정의 */
                baseURL: 'https://some-domain.com/api/',                        /* url 속성 값이 상대 경로라면, url 앞에 baseURL이 붙는다. */
                transformRequest: [function(data, headers) {                    /* 서버에 보내기 전에 요청 데이터를 변경할 수 있다.
                    // 데이터 변환 수행 후, 반환                                         요청 메서드는 PUT, POST, PATCH에만 적용 가능
                    return data;                                                   배열에 마지막 함수는 버퍼의 문자열이나 인스턴스를 반환해야한다. */
                }],
                transformResponse: [function(data) {                            /* 응답할 데이터에 대한 변경을 전달해 then / catch에 전달하도록 허용 */
                    // 데이터 변환 수행 후, 반환
                    return data;
                }],
                headers: {                                                      /* 서버에 전송될 사용자 정의 헤더 */
                    'X-Requested-With': 'XMLHttpRequest'
                },
                params: {                                                       /* 요청과 함꼐 전송될 URL 매개변수, 일반 객체이가너 URLSearchParams 객체여야함 */
                    ID: 12345   
                },
                paramsSerializer: function(params) {                            /* params를 직렬화하는 옵션 함수
                    return Qs.stringify(params, { arrayFormat: 'brackets' })
                },
                data: {                                                         /* 요청 본문( request body )으로 전송할 데이터
                    firstName: 'dh'                                                PUT, POST, PATCH 요청 메서드에만 적용 가능하며, transformRequest가 설정되지 않았다면
                },                                                                 string / plain obj / ArrayBuffer / ArrayBufferView / URLSearchParams 중  
                                                                                   하나여야 함 */
                timeout: 1000,                                                  /* 요청이 타임아웃되는 ms를 설정하며, 이 시간보다 지연될 경우, 요청은 중단됨 */
                withCredentials: false,                                         /* false가 기본값
                                                                                   자격 증명을 사용하여 cross-site-Access-Control 요청이 필요한 경우 설정 */
                adapter: function(config) { ... }                               /* 테스트를 보다 쉽게 해주는 커스텀 핸들링 요청을 허용 */
                auth: {                                                         /* HTTP 기본 인증이 사용되며, 자격 증명을 제공함을 나타냄
                    username: 'dhlee',                                             기존의 Authorization 커스텀 헤더를 덮어쓰는 Authorization 헤더를 설정함 */
                    password: '1234'
                },
                responseType: 'json',                                           /* 서버에서 응답할 데이터 타입을 설정하며 기본값은 json
                                                                                   [ arrayBuffer, blob, document, json, text, stream ]
                responseEncoding: 'utf8',                                       /* 응답 디코딩에 사용할 인코딩을 나타냄 기본값은 utf8
                                                                                   클라이언트 사이드 요청 또는 responseType이 stream인 경우 무시! */
                xsrfCookieName: 'XSRF-TOKEN',                                   /* xsrf 토큰에 대한 값으로 사용할 쿠키 이름 */
                xsrfHeaderName: 'X-XSRF-TOKEN',                                 /* xsrf 토큰 값을 운반하는 HTTP 헤더 이름 */
                onUploadProgress: function(progressEvent) {                     /* 업로드 프로그레스 이번트를 처리 */
                    // Native Progress Event 처리 코드
                },
                onDownloadProgress: function(progressEvent) {                   /* 다운로드 프로그레스 이벤트를 처리 */
                    // Native Progress Event 처리 코드
                },
                maxContentLength: 2000,                                         /* HTTP 응답 컨텐츠의 최대 크기를 바이트 단위로 설정 */
                validateStatus: function(status) {                              /* 주어진 HTTP 응답 상태 코드에 대한 약속을 해결할지 거절할지 결정
                    // 기본값                                                        true를 반환하면 Promise를 resolve하며, false일 경우 reject */
                    return status >= 200 && status < 300;
                },
                maxRedirects: 5,                                                /* Node.js에서 리디렉션 가능한 최대 갯수를 정의하며 5가 기본값 */
                socketPath: null,                                               /* Node.js에서 사용될 UNIX 소켓을 정의
                                                                                   '/var/run/docker.sock'을 사용하여 docker 데몬에 요청을 보내며,
                                                                                    socketPath 또는 proxy만이 지정될 수 있다. */
                httpAgent: new http.Agent({ keepAlive: true }),                 /* httpAgent와 httpsAgent는 각각 Node.js에서 http와 https 요청을 수행할 때 사용할
                httpsAgent: new https.Agent({ keepAlive: true }),                  커스텀 에이전트를 정의한다. 이것은 기본적으로 활성화되지 않은 'keepAlive'와 같은 옵션을
                                                                                   추가할 수 있게 한다. */
                proxy: {                                                        /* proxy는 프록시 서버의 호스트 이름과 포트를 정의함
                    host: '127.0.0.1',                                             기존의 http_proxy 및 https_proxy 환경 변수를 사용하여 프록시를 정의할 수도 있다.
                    port: 9000,                                                    프록시 설정에 환경 변수를 사용하고 있다면 no_proxy 환경 변수를 쉼표로 구분된 도메인 목록으로
                    auth: {                                                        정의하여 프록시할 필요가 없다.
                        username: 'mi',                                            환경 분스를 무시하고 프록시를 사용하지 않으려면 false를 설정한다.
                        password: 'ssss'                                           auth는 HTTP 기본 인증을 사용하여 프록시에 연결하고, 자격 증명을 제공해야함을 나타낸다.
                    }                                                              기존의 Proxy-Authorization 커스텀 헤더를 덮어쓰는 Proxy-Authorization 헤더를 설정 */
                },
                cancelToken: new CancelToken(function(cancel) {                 /* 요청을 취소하는데 사용할 수 있는 취소 토큰을 지정 */
                    ...
                })
            }
    
    - Response Schema
        - 요청에 따른 응답 결과는 다음과 같은 정보를 가진다.
            {
                data: {},                                                       /* 서버가 제공한 응답 데이터 */
                status: 200,                                                    /* 서버 응답의 HTTP 상태 코드 */
                statusText: 'OK',                                               /* 서버 응답으로부터의 HTTP 상태 메시지 */
                headers: {},                                                    /* 서버가 응답한 헤더는 모든 헤더 이름이 소문자로 제공됨 */
                config: {},                                                     /* 요청에 대해 axios에 설정된 config */
                request: {}                                                     /* 응답을 생성한 요청, 브라우저 : XMLHttpRequest 인스턴스, Node.js : ClientRequest
            }