import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getSortListSuccess',
      'getSortListFail'
    );
  }

  getSortList() {

    this.actions.getSortListSuccess([{
      id: 1,
      name: '重庆家庭',
      votes: '12394',
      imgBannerSrc: "/assets/banner/cqjt.png",
      imgSrc: "/assets/comm/cqjt.png"
    }, {
      id: 2,
      name: '黑龙江家庭',
      votes: '32344',
      imgBannerSrc: "/assets/banner/hljjt.png",
      imgSrc: "/assets/comm/hljjt.png"
    }, {
      id: 3,
      name: '山西家庭',
      votes: '12314',
      imgBannerSrc: "/assets/banner/sxjt.png",
      imgSrc: "/assets/comm/sxjt.png"
    }, {
      id: 4,
      name: '苏州家庭',
      votes: '22334',
      imgBannerSrc: "/assets/banner/szjt.png",
      imgSrc: "/assets/comm/szjt.png"
    }, {
      id: 5,
      name: '厦门家庭',
      votes: '12323',
      imgBannerSrc: "/assets/banner/xmjt.png",
      imgSrc: "/assets/comm/xmjt.png"
    }]);
  }

  getSortListVote() {

    this.actions.getSortListSuccess([{
      id: 1,
      name: '重庆家庭',
      votes: '12394',
      imgBannerSrc: "/assets/banner/cqjt.png",
      imgSrc: "/assets/comm/cqjt.png"
    }, {
      id: 2,
      name: '黑龙江家庭',
      votes: '1234422',
      imgBannerSrc: "/assets/banner/hljjt.png",
      imgSrc: "/assets/comm/hljjt.png"
    }, {
      id: 3,
      name: '山西家庭',
      votes: '12314',
      imgBannerSrc: "/assets/banner/sxjt.png",
      imgSrc: "/assets/comm/sxjt.png"
    }, {
      id: 4,
      name: '苏州家庭',
      votes: '22334',
      imgBannerSrc: "/assets/banner/szjt.png",
      imgSrc: "/assets/comm/szjt.png"
    }, {
      id: 5,
      name: '厦门家庭',
      votes: '12323',
      imgBannerSrc: "/assets/banner/xmjt.png",
      imgSrc: "/assets/comm/xmjt.png"
    }]);
  }

  vote(sortId) {

    this.actions.getSortListVote();
  }
}

export default alt.createActions(HomeActions);