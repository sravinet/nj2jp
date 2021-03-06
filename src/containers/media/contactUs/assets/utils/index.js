export const WeblfowJs = () => {
  require('./webflow.js');
}
export WebflowAnimations from './webflow.animations.js';
export const contentData = [
  {
    component: 'InputWithLabel',
    props: {
      type: 'name',
      containerInfo: {
        className: 'name__container',
      },
      labelInfo: {
        className: 'name__label',
        htmlFor: 'name',
        label: 'Name',
      },
      inputInfo: {
        className: 'name__input w-input',
        dataName: 'Name',
        id: 'name',
        name: 'name',
        type: 'text',
        maxLength: '256',
      },
    },
  },
  {
    component: 'InputWithLabel',
    props: {
      type: 'email',
      containerInfo: {
        className: 'email__container',
      },
      labelInfo: {
        className: 'email__label',
        htmlFor: 'email',
        label: 'Email',
      },
      inputInfo: {
        className: 'email__input w-input',
        dataName: 'Email',
        id: 'email',
        name: 'emailAddress',
        type: 'email',
        maxLength: '50',
      },
    },
  },
];

export apiActions from '../../../../../redux/api';
export toasterActions from '../../../../../redux/toaster';
export CheckForToast from '../../../../../services/utils/checkForToast';
export CleanOffTypename from '../../../../../services/utils/cleanOffTypename';
