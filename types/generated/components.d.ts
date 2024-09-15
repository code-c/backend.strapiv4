import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface SectionsExperienceGroup extends Schema.Component {
  collectionName: 'components_sections_experience_groups';
  info: {
    displayName: 'experienceGroup';
    icon: 'server';
    description: '';
  };
  attributes: {
    experience: Attribute.Component<'elements.experience-item', true>;
    heading: Attribute.String;
  };
}

export interface SectionsEducationGroup extends Schema.Component {
  collectionName: 'components_sections_education_groups';
  info: {
    displayName: 'educationGroup';
    icon: 'server';
    description: '';
  };
  attributes: {
    education: Attribute.Component<'elements.education-item', true>;
    heading: Attribute.String;
  };
}

export interface SectionsAvatar extends Schema.Component {
  collectionName: 'components_sections_avatars';
  info: {
    displayName: 'avatar';
    icon: 'user';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    displayName: 'metadata';
    icon: 'information';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

export interface LinksSocial extends Schema.Component {
  collectionName: 'components_links_socials';
  info: {
    displayName: 'Social';
    icon: 'twitter';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    newTab: Attribute.Boolean;
    social: Attribute.Enumeration<
      [
        'GITHUB',
        'YOUTUBE',
        'LINKEDIN',
        'PRINTABLES',
        'THANGS',
        'TWITTER',
        'FACEBOOK',
        'INSTAGRAM'
      ]
    >;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    newTab: Attribute.Boolean;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    newTab: Attribute.Boolean;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'house';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
    slug: Attribute.UID &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    icon: 'apps';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    text: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    menuLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social', true>;
    slug: Attribute.UID &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    displayName: 'NotificationBanner';
    icon: 'bell';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['alert', 'info', 'warning']>;
    heading: Attribute.String;
    text: Attribute.Text;
    show: Attribute.Boolean;
    link: Attribute.Component<'links.link'>;
    slug: Attribute.UID &
      Attribute.CustomField<'plugin::strapi-advanced-uuid.uuid'>;
  };
}

export interface ElementsExperienceItem extends Schema.Component {
  collectionName: 'components_elements_experience_items';
  info: {
    displayName: 'Experience-item';
    icon: 'cup';
    description: '';
  };
  attributes: {
    startDate: Attribute.Date;
    finishDate: Attribute.Date;
    role: Attribute.String;
    employer: Attribute.String;
    description: Attribute.RichText;
    logo: Attribute.Media<'images'>;
  };
}

export interface ElementsEducationItem extends Schema.Component {
  collectionName: 'components_elements_education_items';
  info: {
    displayName: 'Education-item';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    start: Attribute.Date;
    finish: Attribute.Date;
    school: Attribute.String;
    degree: Attribute.String;
    minors: Attribute.Text;
    schoolDescription: Attribute.Text;
    logo: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'sections.heading': SectionsHeading;
      'sections.experience-group': SectionsExperienceGroup;
      'sections.education-group': SectionsEducationGroup;
      'sections.avatar': SectionsAvatar;
      'meta.metadata': MetaMetadata;
      'links.social': LinksSocial;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'layout.navbar': LayoutNavbar;
      'layout.logo': LayoutLogo;
      'layout.footer': LayoutFooter;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.experience-item': ElementsExperienceItem;
      'elements.education-item': ElementsEducationItem;
    }
  }
}
