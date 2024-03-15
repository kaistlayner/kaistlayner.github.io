export interface LectureObject {
  title: string;
  subTitle: string;
  description: string;
  links?: Array<{ href: string; text: string }>;
}

export const memorableLectures: LectureObject[] = [
  {
    title: "운영체제 및 실험",
    subTitle: "핀토스 프로젝트",
    description:
      "방학때부터 미리 프로젝트를 준비하여, 작은 os라는 뜻의 pintOS 프로젝트를 2인에서 진행. 처음으로 큰 규모의 코드를 접하는 경험. ,Thread 스캐쥴링부터 시작해서, stack 관리를 통해 function call, system call 등을 관리했고, 나아가 파일 시스템을 구현하였다. 이를 통해 운영체제의 기본적인 개념을 이해하고, 실제로 구현해보는 경험을 했다.",
  },
  {
    title: "파이썬을 통한 자연언어처리",
    subTitle: "영화 대본에서 등장인물 별 성격 클러스터링",
    description:
      "여러 영화의 대본을 통해 등장인물의 대사를 수집하여, 각 등장인물의 대사를 통해 성격을 분석하고, 클러스터링을 통해 성격을 ,분류하였다. 같은 배우가 연기한 등장인물들이 비슷한 성격을 가지는지에 대한 가설을 세우고, 이를 통해 성격을 분류하였다. 하지만 클러스터링 한 결과, 배우와 관계 없이 같은 영화에 있는 등장인물들이 같은 클러스터에 모였다. 영화별로 고유의 분위기가 있어서, 이를 통해 성격을 분류하는 것은 어려움을 알게 되었다.",
  },
  {
    title: "컴퓨터 그래픽스 개론",
    subTitle: "OpenGL 기반 기본적인 그래픽스 개념",
    description:
      "OpenGL을 통해 3D 그래픽스를 구현하였다. 수업을 통해 3D 그래픽스의 기본적인 개념을 이해하고, 주어진 skeleton 코드를 통해서 3D cow를 ,키보드 마우스와 연결해서 확대하고 회전시키는 등의 구현을 했고, 빛과 카메라의 위치를 통해 빛 반사와 그림자를 최대한 자연스럽게 구현했다. 이를 통해 3D 그래픽스의 기본적인 개념을 이해하게 되었다.",
  },
];

export const lastSemesterLectures: LectureObject[] = [
  {
    title: "인공지능을 위한 시스템",
    subTitle: "GPU Systolic array를 이용한 행렬곱 가속화",
    description:
      "FPGA와 verilog를 이용하여, GPU의 Systolic array를 구현하고, 이를 통해 행렬곱을 가속화하는 프로젝트를 진행하였다. CUDA ,코드를 이용하여 GPU에 행렬곱에 대한 명령을 내리고, FPGA로 들어오는 값들이 systolic array에서 잘 연산되도록 verilog 코드를 작성하였다. 연산된 결과를 model에 통과시켰을 때와 tensorflow로 간단하게 구현된 코드를 이용했을 때를 비교하여 object detection이 잘 작동하는지를 확인하였다. 이를 통해 GPU의 Systolic array를 이해하고, 이를 통해 행렬곱을 가속화하는 방법을 이해하게 되었다.",
  },
  {
    title: "생성형 인공지능의 사회 활용",
    subTitle: "transformer, BERT, GAN 등 다양한 생성형 모델에 대한 이해",
    description:
      "수업에서 BERT, GAN 등 다양한 생성형 모델에 대한 소개를 받았다. transformer, self-attention 를 이용해서 convolution ,layer에서 발생했던 많은 양의 연산을 없앴고, 또 GAN 과 같은 model을 통해 현제 생성되는 이미지나 음성이 실제와 정말 구분하기 어려운 수준으로 만들어지고 있다는 것을 알게 되었다. 이미지 생성 모델인 Dall-E 같은 최신 모델들은 작가의 화풍이나 음성의 특징과 같은 개개인의 style 마저 학습 가능했고, Style-Based Generator Architecture for GANs 를 통해 이제는 모델이 머리카락이나 눈동자와 같은 부분을 분리해서 학습하고, 나아가 더욱 자연스러운 이미지를 생성하고 있다는 것을 알게 되었다. AI 발전에 따른 copyright 문제도 다루면서, 그림에 watermark를 넣어서, 이를 통해 AI가 생성한 이미지를 구분하는 방법도 다루었다. 우리 팀은 AI-driven virtual time travel이라는 프로젝트를 진행하여, 여러 시간대를 기반으로 AI가 생성한 virtual world에서 시간을 여행하는 것에 대한 발표를 하였다.",
  },
];

export const militaryServiceContents: LectureObject[] = [
  {
    title: "프론트엔드",
    subTitle:
      "React, Material-UI, nextJS, TypeScript로 기획 구현 및 native 개발자와 협업",
    description: "한게 많아서.. 나중에 써야지",
  },
  {
    title: "백엔드",
    subTitle: "expressJS, knex, NestJS, prisma, mysql, AWS로 API 개발 및 배포",
    description: "한게 많아서.. 나중에 써야지22",
  },
];

export const hobbyContents: LectureObject[] = [
  {
    title: "게임",
    subTitle: "메이플스토리",
    description:
      "17년도부터 꾸준히 즐기는 게임이다. 이 밖에도 경뿌나 이벤트 버프를 제때 받기 위해서, 채팅으로 설정한 시간마다 디스코드 채널에 ,알림을 보내는 디스코드 봇을 만들어 heroku에 배포해서 같이 게임을 즐기는 길드원들과 같이 사용해봤다.",
    links: [
      {
        href: "https://maple.gg/u/%EC%B5%B8%ED%95%B4",
        text: "메이플 캐릭터 정보",
      },
      {
        href: "https://github.com/kaistlayner/discord",
        text: "디스코드 봇 repo",
      },
    ],
  },
  {
    title: "피아노",
    subTitle: "평소에 즐겨하는 게임이나 애니메이션에 나오는 음악 연주",
    description:
      "위드피아노에서 1년 동안 레슨을 받았고, 이후에는 스스로 연습하며 연주하고 있다. 피아노학원 연주회에 2번 참여하여 윤하의 사건의 ,지평선과 메이플스토리 아르카나 배경음악을 연주하였다.",
    links: [
      {
        href: "https://tv.naver.com/v/33841711",
        text: "사건의 지평선 - 윤하",
      },
      {
        href: "https://tv.naver.com/v/38070792",
        text: "The tune of the azure light 2 - Maplestory OST (메이플스토리 아르카나 배경음악)",
      },
    ],
  },
  {
    title: "수영",
    subTitle: "친구와 함께 주 4회 수영 수업",
    description:
      "유성구 종합사회복지관 수영장에서 고등학교 친구와 초급반 수업을 듣고 있다. 수영을 통해 몸을 건강하게 유지하고, 친구와 함께 ,즐거운 시간을 보내고 있다. 분명 초급반인데.. 2주도 안되어서 자유형 배형을 배웠다..ㅎㅎ",
  },
];
