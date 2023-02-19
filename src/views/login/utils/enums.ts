import { $t } from "@/plugins/i18n";

const operates = [
  //login方式
  // {
  //   title: $t("login.phoneLogin")
  // },
  // {
  //   title: $t("login.qRCodeLogin")
  // },
  // {
  //   title: $t("login.register")
  // }
];

const thirdParty = [
  // {
  //   title: $t("login.weChatLogin"),
  //   icon: "ri:wechat-fill"
  // },
  // {
  //   title: $t("login.alipayLogin"),
  //   icon: "ri:alipay-fill"
  // },
  // {
  //   title: $t("login.qqLogin"),
  //   icon: "ri:qq-fill"
  // },
  // {
  //   title: $t("login.weiboLogin"),
  //   icon: "ri:weibo-fill"
  // },
  {
    title: $t("login.samLogin"),
    icon: "ri:stock-fill"
  }
];

export { operates, thirdParty };
