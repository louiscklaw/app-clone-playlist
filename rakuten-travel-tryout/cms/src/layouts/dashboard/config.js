import { Chip, SvgIcon } from '@mui/material';
import AlignLeft02Icon from '../../icons/untitled-ui/duocolor/align-left-02';
import BarChartSquare02Icon from '../../icons/untitled-ui/duocolor/bar-chart-square-02';
import Building04Icon from '../../icons/untitled-ui/duocolor/building-04';
import CalendarIcon from '../../icons/untitled-ui/duocolor/calendar';
import CheckDone01Icon from '../../icons/untitled-ui/duocolor/check-done-01';
import CreditCard01Icon from '../../icons/untitled-ui/duocolor/credit-card-01';
import CurrencyBitcoinCircleIcon from '../../icons/untitled-ui/duocolor/currency-bitcoin-circle';
import File01Icon from '../../icons/untitled-ui/duocolor/file-01';
import GraduationHat01Icon from '../../icons/untitled-ui/duocolor/graduation-hat-01';
import HomeSmileIcon from '../../icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from '../../icons/untitled-ui/duocolor/layout-alt-02';
import LineChartUp04Icon from '../../icons/untitled-ui/duocolor/line-chart-up-04';
import Lock01Icon from '../../icons/untitled-ui/duocolor/lock-01';
import LogOut01Icon from '../../icons/untitled-ui/duocolor/log-out-01';
import Mail03Icon from '../../icons/untitled-ui/duocolor/mail-03';
import Mail04Icon from '../../icons/untitled-ui/duocolor/mail-04';
import MessageChatSquareIcon from '../../icons/untitled-ui/duocolor/message-chat-square';
import ReceiptCheckIcon from '../../icons/untitled-ui/duocolor/receipt-check';
import Share07Icon from '../../icons/untitled-ui/duocolor/share-07';
import ShoppingBag03Icon from '../../icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from '../../icons/untitled-ui/duocolor/shopping-cart-01';
import Truck01Icon from '../../icons/untitled-ui/duocolor/truck-01';
import Upload04Icon from '../../icons/untitled-ui/duocolor/upload-04';
import Users03Icon from '../../icons/untitled-ui/duocolor/users-03';
import XSquareIcon from '../../icons/untitled-ui/duocolor/x-square';
import { tokens } from '../../locales/tokens';
import { paths } from '../../paths';

// shortern the path
let dashboard = paths.dashboard;

export const getPages = t => {
  return {
    subheader: t(tokens.nav.pages),
    items: [
      {
        title: t(tokens.nav.auth),
        icon: (
          <SvgIcon fontSize="small">
            <Lock01Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.login),
            items: [
              { title: 'Classic', path: paths.authDemo.login.classic },
              { title: 'Modern', path: paths.authDemo.login.modern },
            ],
          },
          {
            title: t(tokens.nav.register),
            items: [
              { title: 'Classic', path: paths.authDemo.register.classic },
              { title: 'Modern', path: paths.authDemo.register.modern },
            ],
          },
          {
            title: t(tokens.nav.forgotPassword),
            items: [
              { title: 'Classic', path: paths.authDemo.forgotPassword.classic },
              { title: 'Modern', path: paths.authDemo.forgotPassword.modern },
            ],
          },
          {
            title: t(tokens.nav.resetPassword),
            items: [
              { title: 'Classic', path: paths.authDemo.resetPassword.classic },
              { title: 'Modern', path: paths.authDemo.resetPassword.modern },
            ],
          },
          {
            title: t(tokens.nav.verifyCode),
            items: [
              { title: 'Classic', path: paths.authDemo.verifyCode.classic },
              { title: 'Modern', path: paths.authDemo.verifyCode.modern },
            ],
          },
        ],
      },
      {
        title: t(tokens.nav.pricing),
        path: paths.pricing,
        icon: (
          <SvgIcon fontSize="small">
            <CreditCard01Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.checkout),
        path: paths.checkout,
        icon: (
          <SvgIcon fontSize="small">
            <LogOut01Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.contact),
        path: paths.contact,
        icon: (
          <SvgIcon fontSize="small">
            <Mail04Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.error),
        icon: (
          <SvgIcon fontSize="small">
            <XSquareIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: '401',
            path: paths['401'],
          },
          {
            title: '404',
            path: paths['404'],
          },
          {
            title: '500',
            path: paths['500'],
          },
        ],
      },
    ],
  };
};

export const getConcepts = t => {
  return {
    subheader: t(tokens.nav.concepts),
    items: [
      {
        title: t(tokens.nav.customers),
        path: dashboard.customers.index,
        icon: (
          <SvgIcon fontSize="small">
            <Users03Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.list), path: dashboard.customers.index },
          { title: t(tokens.nav.details), path: dashboard.customers.details },
          { title: t(tokens.nav.edit), path: dashboard.customers.edit },
        ],
      },
      {
        title: t('Users'),
        path: dashboard.users.index,
        icon: (
          <SvgIcon fontSize="small">
            <Users03Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.list), path: dashboard.users.index },
          { title: t(tokens.nav.details), path: dashboard.users.details },
          { title: t(tokens.nav.edit), path: dashboard.users.edit },
        ],
      },
      {
        title: t(tokens.nav.productList),
        path: dashboard.products.index,
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingBag03Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.list), path: dashboard.products.index },
          { title: t(tokens.nav.create), path: dashboard.products.create },
        ],
      },
      {
        title: t(tokens.nav.orderList),
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingCart01Icon />
          </SvgIcon>
        ),
        path: dashboard.orders.index,
        items: [
          { title: t(tokens.nav.list), path: dashboard.orders.index },
          { title: t(tokens.nav.details), path: dashboard.orders.details },
        ],
      },
      {
        title: t(tokens.nav.invoiceList),
        path: dashboard.invoices.index,
        icon: (
          <SvgIcon fontSize="small">
            <ReceiptCheckIcon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.list), path: dashboard.invoices.index },
          { title: t(tokens.nav.details), path: dashboard.invoices.details },
        ],
      },
      {
        title: t(tokens.nav.logistics),
        path: dashboard.logistics.index,
        icon: (
          <SvgIcon fontSize="small">
            <Truck01Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.dashboard), path: dashboard.logistics.index },
          { title: t(tokens.nav.fleet), path: dashboard.logistics.fleet },
        ],
      },
      {
        title: t(tokens.nav.academy),
        path: dashboard.academy.index,
        icon: (
          <SvgIcon fontSize="small">
            <GraduationHat01Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.dashboard), path: dashboard.academy.index },
          { title: t(tokens.nav.course), path: dashboard.academy.courseDetails },
        ],
      },
      {
        title: t(tokens.nav.jobList),
        path: dashboard.jobs.index,
        icon: (
          <SvgIcon fontSize="small">
            <Building04Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.browse), path: dashboard.jobs.index },
          { title: t(tokens.nav.details), path: dashboard.jobs.companies.details },
          { title: t(tokens.nav.create), path: dashboard.jobs.create },
        ],
      },
      {
        title: t(tokens.nav.socialMedia),
        path: dashboard.social.index,
        icon: (
          <SvgIcon fontSize="small">
            <Share07Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.profile), path: dashboard.social.profile },
          { title: t(tokens.nav.feed), path: dashboard.social.feed },
        ],
      },
      {
        title: t(tokens.nav.blog),
        path: dashboard.blog.index,
        icon: (
          <SvgIcon fontSize="small">
            <LayoutAlt02Icon />
          </SvgIcon>
        ),
        items: [
          { title: t(tokens.nav.postList), path: dashboard.blog.index },
          { title: t(tokens.nav.postDetails), path: dashboard.blog.postDetails },
          { title: t(tokens.nav.postCreate), path: dashboard.blog.postCreate },
        ],
      },
      {
        title: t(tokens.nav.fileManager),
        path: dashboard.fileManager,
        icon: (
          <SvgIcon fontSize="small">
            <Upload04Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.kanban),
        path: dashboard.kanban,
        icon: (
          <SvgIcon fontSize="small">
            <CheckDone01Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.mail),
        path: dashboard.mail,
        icon: (
          <SvgIcon fontSize="small">
            <Mail03Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.chat),
        path: dashboard.chat,
        icon: (
          <SvgIcon fontSize="small">
            <MessageChatSquareIcon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.calendar),
        path: dashboard.calendar,
        icon: (
          <SvgIcon fontSize="small">
            <CalendarIcon />
          </SvgIcon>
        ),
      },
    ],
  };
};

export const getMisc = t => {
  return {
    subheader: 'Misc',
    items: [
      {
        title: 'Level 0',
        icon: (
          <SvgIcon fontSize="small">
            <AlignLeft02Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: 'Level 1a',
            items: [
              {
                title: 'Level 2a',
                items: [
                  {
                    title: 'Level 3a',
                  },
                  {
                    title: 'Level 3b',
                    disabled: true,
                  },
                ],
              },
              { title: 'Level 2b' },
            ],
          },
          {
            title: 'Level 1b',
          },
        ],
      },
      {
        title: 'Disabled',
        disabled: true,
        icon: (
          <SvgIcon fontSize="small">
            <XSquareIcon />
          </SvgIcon>
        ),
      },
      {
        title: 'Label',
        icon: (
          <SvgIcon fontSize="small">
            <File01Icon />
          </SvgIcon>
        ),
        label: <Chip color="primary" label="New" size="small" />,
      },
      {
        title: 'Blank',
        path: dashboard.blank,
        icon: (
          <SvgIcon fontSize="small">
            <File01Icon />
          </SvgIcon>
        ),
      },
      {
        title: 'External Link',
        path: 'https://devias.io',
        icon: (
          <SvgIcon fontSize="small">
            <File01Icon />
          </SvgIcon>
        ),
      },
    ],
  };
};

export const getSections = t => [
  {
    items: [
      {
        title: t(tokens.nav.overview),
        path: dashboard.index,
        icon: (
          <SvgIcon fontSize="small">
            <HomeSmileIcon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.analytics),
        path: dashboard.analytics,
        icon: (
          <SvgIcon fontSize="small">
            <BarChartSquare02Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.ecommerce),
        path: dashboard.ecommerce,
        icon: (
          <SvgIcon fontSize="small">
            <LineChartUp04Icon />
          </SvgIcon>
        ),
      },
      {
        title: t(tokens.nav.crypto),
        path: dashboard.crypto,
        icon: (
          <SvgIcon fontSize="small">
            <CurrencyBitcoinCircleIcon />
          </SvgIcon>
        ),
        label: <Chip color="primary" label="New" size="small" />,
      },
      {
        title: t(tokens.nav.account),
        path: dashboard.account,
        icon: (
          <SvgIcon fontSize="small">
            <HomeSmileIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  getConcepts(t),
  getPages(t),
  getMisc(t),
];
