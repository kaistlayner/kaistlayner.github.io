export interface HistoryObject {
  title: string;
  subTitle?: string;
  description: string;
  links?: Array<{ href: string; text: string; image?: string }>;
}

export const memorableLectures: HistoryObject[] = [
  {
    title: "운영체제 및 실험",
    subTitle: "핀토스 프로젝트",
    description:
      "방학때부터 미리 프로젝트를 준비하여, 작은 os라는 뜻의 pintOS 프로젝트를 2인에서 진행하였습니다. 처음으로 큰 규모의 코드를 접하는 경험이었습니다. 초반부에는 sleep 상태인 thread를 깨우거나 thread 사이의 우선순위에 따라 scheduling 하는 과제였고, 그 뒤에는 virtual memory와 file system을 구현하는 과제였습니다. 함수 호출이나 parameter 전달을 위해 virtual memory에 stack memory를 할당해서 변수들과 return address 등을 복사해서 포인터로 stack 안에 순서에 맞게 저장했고, process를 실행하거나 중지, 삭제 등을 하는 shell level의 권한이 필요한 action 들을 system call을 통해 호출하도록 구현했습니다.",
    links: [
      {
        href: "https://github.com/kaistlayner/pintos",
        text: "pintOS project github link",
      },
    ],
  },
  {
    title: "파이썬을 통한 자연언어처리",
    subTitle: "영화 대본에서 등장인물 별 성격 클러스터링",
    description:
      "여러 영화의 대본을 통해 등장인물의 대사를 수집하여, 각 등장인물의 대사를 통해 성격을 분석하고, 클러스터링을 통해 성격을 분류하였습니다. 같은 배우가 연기한 등장인물이 비슷한 성격을 가지는지에 대한 가설을 세우고, 이를 통해 성격을 분류하였습니다. 하지만 클러스터링 한 결과, 배우와 관계 없이 같은 영화에 있는 등장인물들이 같은 클러스터에 모였습니다. 아무래도 대본에는 목소리나 억양, 몸짓에 대한 언급이 자세하지 않았을 뿐더러 영화별로 고유의 분위기가 더 강하게 적용된다는 것으로 결론이 났습니다.",
    links: [
      {
        href: "https://github.com/kaistlayner/nlp-with-python",
        text: "nlp team project github link",
      },
    ],
  },
  {
    title: "컴퓨터 그래픽스 개론",
    subTitle: "OpenGL 기반 기본적인 그래픽스 개념",
    description:
      "OpenGL을 통해 3D 그래픽스를 구현하였습니다. 수업을 통해 3D 그래픽스의 기본적인 개념을 이해하고, 주어진 skeleton 코드를 통해서 3D cow를 키보드 마우스와 연결해 확대하고 회전시키는 등의 구현을 했고, 빛과 카메라의 위치에 의한 빛 반사와 그림자를 최대한 자연스럽게 구현했습니다. 이를 통해 3D 그래픽스의 기본적인 개념을 이해하게 되었습니다.",
  },
];

export const lastSemesterLectures: HistoryObject[] = [
  {
    title: "인공지능을 위한 시스템",
    subTitle: "GPU Systolic array를 이용한 행렬곱 가속화",
    description:
      "FPGA와 verilog를 이용하여 GPU의 Systolic array를 구현하고, 이를 통해 행렬곱을 가속화하는 프로젝트를 진행하였습니다. CUDA 코드를 이용하여 GPU에 행렬곱에 대한 명령을 내리고, FPGA로 들어오는 값들이 systolic array에서 잘 연산되도록 verilog 코드를 작성하였습니다. 연산된 결과를 model에 통과시켰을 때와 tensorflow로 간단하게 구현된 코드를 이용했을 때를 비교하여 object detection이 잘 작동하는지를 확인하였습니다. 이를 통해 GPU의 Systolic array를 이해하고, 이를 통해 행렬곱을 가속화하는 방법을 이해하게 되었습니다.",
  },
  {
    title: "생성형 인공지능의 사회 활용",
    subTitle: "transformer, BERT, GAN 등 다양한 생성형 모델에 대한 이해",
    description:
      "수업에서 BERT, GAN 등 다양한 생성형 모델에 대한 소개를 받았습니다. transformer, self-attention를 이용해서 convolution layer에서 발생했던 많은 양의 연산을 없앴고, 또 GAN 과 같은 model을 통해 현제 생성되는 이미지나 음성이 실제와 정말 구분하기 어려운 수준으로 만들어지고 있다는 것을 알게 되었습니다. 이미지 생성 모델인 Dall-E 같은 최신 모델들은 작가의 화풍이나 음성의 특징과 같은 개개인의 style 마저 학습 가능했습니다. Style-Based Generator Architecture for GANs라는 논문을 통해 이제는 모델이 머리카락이나 눈동자와 같은 부분을 분리해서 학습하고, 나아가 더욱 자연스러운 이미지를 생성하고 있다는 것을 알게 되었습니다. AI 발전에 따른 copyright 문제도 다루면서, 그림에 watermark를 넣어서 AI가 생성한 이미지를 구분하는 방법도 다루었습니다. 우리 팀은 AI-driven virtual time travel이라는 프로젝트를 진행하여, 여러 시간대를 기반으로 AI가 생성한 virtual world에서 시간을 여행하는 것에 대한 간단한 발표를 하였습니다. 생성형 모델에 대한 이해를 높일 수 있었습니다.",
  },
];

export const militaryServiceContents: HistoryObject[] = [
  {
    title: "프론트엔드 (산업기능요원)",
    subTitle:
      "React, Material-UI, nextJS, TypeScript로 기획 구현 및 native 개발자와 협업",
    description:
      "처음 프론트엔드를 react로 배우면서 웹 개발을 시작했습니다. bootstrap 및 .css 파일들로 이루어진 레포를 점차 리팩토링 하여 .scss 파일 및 mui 기반 컴포넌트들로 변경했습니다. 이후에는 nextJS로 SSR을 적용하고, TypeScript로 타입을 적용하였습니다. 이를 통해 레거시 코드를 제거하고, 타입을 적용하여 더욱 안정적인 코드를 작성할 수 있었습니다. 새로운 repository들도 만들면서 필요한 페이지들을 직접 AWS amplify에 추가하여 배포하였고, 배포나 속도에서 문제가 되는 부분들을 개선하였습니다. 이후에는 native 개발자와 협업도 하였습니다. 웹뷰로 보여지는 회사 서비스에 window 객체에 심어놓은 bridge를 이용해서 android, iOS으로 부터 로그인 토큰 값이나 기기 정보를 불러와 로그인 및 관련 팝업들을 구현을 하거나, native 앱의 뒤로가기를 실행하거나 다른 도메인의 웹뷰를 앱에 띄우는 작업을 진행하였습니다. 각 웹뷰에 ga를 추가하여 접속자 수나 클릭 동향도 확인해볼 수 있었습니다. 이를 통해 프론트엔드에 대해 자세히 이해하고, 실제로 운영되는 서비스를 유지 보수까지 해볼 수 있었습니다.",
  },
  {
    title: "백엔드 (산업기능요원)",
    subTitle: "expressJS, knex, NestJS, prisma, mysql, AWS로 API 개발 및 배포",
    description:
      "프론트엔드 이후 백엔드에도 관심이 생겨, expressJS로 API를 개발하였습니다. 처음에는 orm으로 knex를 사용하여 mysql과 연동하였고, 이를 통해 필요한 api를 만들어 프론트에서 직접 사용하거나, 내가 맡고 있는 서비스에 대해 필요한 api를 다른 프론트 개발자에게 만들어주었습니다. 이후에는 NestJS로 API를 개발하였고, orm으로는 prisma를 이용하여 mysql과 연동하였습니다. 새롭게 들어갈 table들이나 column들이 db에 추가될 경우, table들이 복잡하게 연결되어 있고, 또 각 table과 연결된 api들이 많기 때문에 knex migration 코드나 prisma migrate 코드를 작성하여 안정적으로 변경점을 db에 적용시키거나 되돌릴 수 있도록 하였습니다. 백엔드는 AWS에서 배포 상태를 확인하거나, s3에서 이미지를 수정/추가하거나, 코드에서 logger로 찍은 로그를 확인하거나, 서버에 문제가 생겼을 때 서버를 특정 지점으로 돌리거나 재시작하는 등의 작업을 진행하였습니다. 다음에는 eb에서 api 요청 수에 따른 인스턴스 관리도 해보고 싶습니다. 백엔드에 대해서도 자세히 이해하게 되었고, 마찬가지로 실제로 운영되는 서비스를 유지 보수까지 해볼 수 있었습니다.",
  },
];

export const hobbyContents: HistoryObject[] = [
  {
    title: "게임",
    subTitle: "메이플스토리",
    description:
      "17년도부터 꾸준히 즐기는 게임입니다. 이 밖에도 경뿌나 이벤트 버프를 제때 받기 위해서, 채팅으로 설정한 시간마다 디스코드 채널에 알림을 보내는 디스코드 봇을 만들어 heroku에 배포해서 같이 게임을 즐기는 길드원들과 사용해봤습니다. 이후에 추첨 뽑기 같은 기능도 추가하여 사용했습니다.",
    links: [
      {
        href: "https://maple.gg/u/%EC%B5%B8%ED%95%B4",
        text: "나의 메이플 캐릭터",
        image: "/images/maple.png",
      },
      {
        href: "https://github.com/kaistlayner/discord",
        text: "디스코드 봇 github",
        image: "/images/discord.png",
      },
    ],
  },
  {
    title: "피아노",
    subTitle: "평소에 즐겨하는 게임이나 애니메이션에 나오는 음악 연주",
    description:
      "위드피아노에서 1년 동안 레슨을 받았고, 이후에는 스스로 연습하며 연주하고 있습니다. 피아노학원 연주회에 2번 참여하여 윤하의 사건의 지평선과 메이플스토리 아르카나 배경음악을 연주하였습니다.",
    links: [
      {
        href: "https://tv.naver.com/v/33841711",
        text: "[사건의 지평선 - 윤하] 연주 영상",
        image: "/images/piano1.png",
      },
      {
        href: "https://tv.naver.com/v/38070792",
        text: "[The tune of the azure light 2 - Maplestory OST (메이플스토리 아르카나 배경음악)] 연주 영상",
        image: "/images/piano3.png",
      },
    ],
  },
  {
    title: "수영",
    subTitle: "친구와 함께 주 4회 수영 수업",
    description:
      "유성구 종합사회복지관 수영장에서 고등학교 친구와 초급반 수업을 듣고 있습니다. 분명 초급반인데.. 2주도 안되어서 자유형 배형을 배우고 있습니다. 수영을 통해 몸을 건강하게 유지하고, 친구와 함께 즐거운 시간을 보내고 있습니다. ",
    links: [
      {
        href: "http://yuseongswc.or.kr/page.php?idx=0401",
        text: "유성구 종합사회복지관 수영장",
        image: "/images/swim.jpg",
      },
    ],
  },
];
