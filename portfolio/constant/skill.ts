export const skill: Record<string, string> = {
  reactJS:
    "첫 시작으로 접했던 프론트엔드 프레임워크로, react 특유의 생애주기 state와 component에 대한 개념을 쌓을 수 있었습니다. 수 많은 컴포넌트를 생성 및 수정하였고, 백엔드 api 연결하면서 웹 개발에 대한 이해를 높힐 수 있었습니다.",
  css: "css를 처음에는 .css, .scss 파일로 관리하였고, 점차 mui의 makeStyle로 관리하였습니다. 추후에 nextjs로 넘어가면서 styled-component, mui의 sx 등 다양한 방법으로 style을 관리하였습니다.",
  nextJS:
    "SPA(Single Page Application)인 react에서는 static하지 않는 url에 metadata를 삽입하기 어려워, 서비스의 이벤트들이 검색될 수 있도록 SEO(Search Engine Optimization)이 가능한 nextJS 프레임워크로 변경하였습니다. SSR(Server Side Rendering)을 통해 client가 화면을 그리기 전에 api를 미리 호출하며 화면을 그려놓아 초기 로딩 없이 화면을 전환할 수 있었고, 여기서 받은 데이터를 통해 메타데이터를 삽입하여 검색엔진 최적화를 할 수 있었습니다.",
  typescript:
    "타입을 지원하는 nextJS로 넘어오면서 typescript를 도입했습니다. 타입이 틀리면 lint error를 발생시켜 배포 전에 하는 자잘한 실수가 크게 줄어들었습니다. 코드 작성 시 타입이 보여 코드가 체계적으로 되었고, 코드의 가독성도 크게 향상 되었습니다. Omit, Partial, Pick 등의 타입 뿐만 아니라, 리터럴 타입 같은 타입스크립트만의 특징을 잘 활용하여 코드를 작성하였습니다.",
  expressJS:
    "기본적인 js로 백엔드 서버를 구축할 수 있는 가장 간단한 프레임워크입니다. middleware, endpoint 등을 만들어 api로 db(database)를 연결 및 관리하였습니다. 프론트엔드로 api 제공하여 필요로 하는 데이터나 로그인, 웹 크롤링, 결제 같은 기능을 전달하였고, 에러 로그 수집을 위해 logger도 추가했습니다. 특히, image를 aws S3에 업로드하여 cloudfront에서 lambda를 통해 리사이징하여 사용자에게 제공하는 기능도 추가하였습니다.",
  knex: "코드에 sql문을 사용하면 가독성도 떨어지고 eslint로 실수를 잡아내기도 어렵기 때문에, expressJS에서 db에 연결하기 위해 사용했던 ORM(Object Relational Mapping)입니다. api에서 select나 transaction 등 db에 기본적인 요청을 보낼 때 사용했으며, db에 연결되는 것이기 때문에 코드 관리를 위해 router와 각 종 middleware를 거치고 난 마지막 service 파일에서만 사용했습니다. table을 생성하거나, column을 추가, 또는 특정 column들의 값을 일괄 변경해야 할 때 migration 파일을 생성하여 migrate:up, migrate:down 이라는 명령어로 db에 수동으로 입력한 명령을 전달하여 db의 스키마를 관리하였습니다.",
  nestJS:
    "expressJS에서는 미들웨어, 라우터, 서비스 등을 직접 정의해서 만들어야 했지만, nestJS에서는 module, controller, service, dto 등을 지원합니다. nestJS를 통해서 이전에 expressJS에서 적용하기 힘들었던 typescript 또한 같이 도입할 수 있었습니다. 또한, 기존에는 notion에 수동으로 정리했던 api 문서를 nestJS에서는 코드에 쓴 내용을 바탕으로 swagger를 통해 자동으로 생성할 수 있었습니다.",
  prisma:
    "타입을 지원하는 nestJS와 함께 사용했던 ORM입니다. db를 읽어서 schema file이 생성되고, 이 파일을 수정하면 db에 반영되는 방식으로 migration을 진행할 수 있었습니다. db의 각 테이블을 읽어와서 각 column의 타입을 읽을 수 있을 뿐만 아니라, prisma를 사용할 때 table의 column들이 자동완성 되어 코드를 실수 없이 더 쉽게 작성할 수 있었습니다. 또한, schema file을 수정한 커밋을 확인할 수 있어서 db 스키마 변경에 대한 history를 github로 관리할 수 있게 되었습니다.",
  graphql:
    "커뮤니티 프론트엔드 작업 시 다른 회사와 협업하며 사용했던 쿼리 언어입니다. api로 부터 generate된 스키마 파일을 통해 타입을 지원받을 수 있었고, 이 스키마 파일을 읽어서 어떤 column들을 선택하여 불러올 수 있는지 확인한 후, client에서 필요한 데이터만 선택하여 받아올 수 있었습니다.",
  mysql:
    "관계형 db로, 문의사항이나 에러가 발생했을 때, db에 저장된 데이터를 확인하여 문제를 해결하였습니다. sql문을 바탕으로 어뷰징 유저를 확인하거나 table의 크기나 row의 수를 확인해 중간 중간 db의 상태를 확인하였습니다. 이를 바탕으로 db의 성능을 향상시키기 위해 column에 index를 추가하거나, foreign key들을 확인해서 새롭게 추가할 table을 효율적으로 설계했습니다.",
  redis:
    "관계형 db로, 잘 변하지 않는 데이터나 일정 주기마다 변경되는 데이터를 저장했습니다. s3에 올려서 서비스에 사용하는 아이콘 같은 경우엔 expire 없이 쭉 image 주소를 redis에 저장시킨 후, 아이콘이 변경될 때 직접 s3에 업로드 후 refresh 시켰고, 검색 인기 순위의 경우는 1시간마다 expire 시켜 크기가 큰 검색 기록 table에 대한 호출 횟수를 줄여 db의 부하를 줄였습니다. 또, api 호출 수가 압도적으로 높은 메인 화면 진입시 호출되는 중요하지 않은 좋아요 횟수같은 데이터들도 redis에 저장하여 db에 부하를 줄였습니다.",
  aws: "담당하는 서비스나 직접 생성한 프론트엔드 레포지토리들을 카카오 map이나 google analytics 등에 필요한 production key를 환경 변수에 설정해 amplify에 추가하여 배포를 진행하였고, 매번 production 반영 시 배포 진행과정을 확인했습니다. 백엔드는 cloudWatch로 로그 확인하여 문제가 되는 api를 찾아 수정하였고, S3 이미지 관리도 하였습니다. eb, ec2를 통해 배포 상황을 확인하였고, 배포 과정에서의 에러 메세지를 확인하여 수정하거나, 문제 시 이전 배포로 되돌리는 등의 작업을 하였습니다.",
};
