import React from 'react'
import styled, { css } from 'styled-components'
import { hideVisually } from 'polished'
import { Container, Row, Column } from '../components/grid'
import BannerImage from '../components/banner/bannerImage'
import theme from '../theme/theme'
import { media } from '../theme/media'

const ResponsiveTable = styled.table`
  border-collapse: collapse;

  th {
    vertical-align: top;
    text-align: left;
    padding: 15px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.indigo};
    font-family: ${theme.fonts.title};
    font-weight: 600;
    border: 1px solid ${theme.colors.indigo};
  }

  td {
    vertical-align: top;
    border: 1px solid ${theme.colors.darkGrey};
    padding: 15px;
  }

  ${props =>
    props.responsive &&
    css`
      ${media.tabletMax`
        thead {
            ${hideVisually()}
        }

        tbody {
            display: block;
        }

        tr {
            display: block;
            margin-bottom: 2rem;

            &:last-child {
                margin-bottom: 1rem;
            }
        }

        td {
          padding: 10px;
          display: block;

          ${props.columns.map((column, index) => {
            return css`
                  &:nth-of-type(${index + 1}):before {
                  content: '${column}';
                  font-family: ${theme.fonts.title};
                  font-weight: 600;
                  padding: 10px;
                  display: block;
                  color: ${theme.colors.white};
                  background-color: ${theme.colors.indigo};
                  margin: -10px -10px 10px -10px;
                }
            `
          })}
          }
      `};
    `}
`

const PrivacyPolicyPage = () => (
  <>
    <BannerImage
      titleText="Privacy and cookies policy"
      color={theme.colors.greyBlue}
    />
    <Container>
      <Row>
        <Column width={[1, 1, 1, 2 / 3]} pt={[30, 30, 60]}>
          <p>
            London LGBT Community Pride CIC respects your privacy and is
            committed to protecting your personal data. This privacy policy will
            inform you as to how we look after your personal data when you visit
            our website (regardless of where you visit it from) and/or use our
            app and tells you about your privacy rights and how the law protects
            you.
          </p>
          <h2>1. IMPORTANT INFORMATION AND WHO WE ARE</h2>
          <p>
            This privacy policy gives you information on how London LGBT
            Community Pride CIC collects and processes your personal data
            through your use of this website and/or use our app, including any
            data you may provide through this website and/or our app when you
            sign up to our newsletter, sign up for our events, sign up to
            volunteer, take part in a parade, or donate to us. It is important
            that you read this privacy policy carefully together with any other
            privacy policy or fair processing notice we may provide on specific
            occasions when we are collecting or processing personal data about
            you so that you are fully aware of how and why we are using your
            data. This privacy policy supplements the other notices and is not
            intended to override them.
          </p>
          <p>
            We collect, use and are responsible for certain personal data about
            you. When we do so we are subject to data protection laws applicable
            in the United Kingdom and we are responsible as ‘controller’ of that
            personal data for the purposes of those laws.
          </p>
          <h3>1.1 YOUR DUTY TO INFORM US OF CHANGES</h3>
          <p>
            It is important that the personal data we hold about you is accurate
            and current. Please keep us informed if your personal data changes
            during your relationship with us.{' '}
          </p>
          <h3>1.2 THIRD-PARTY LINKS</h3>
          <p>
            This website and/or our app may include links to third-party
            websites, plug-ins and applications. Clicking on those links or
            enabling those connections may allow third parties to collect or
            share data about you. We do not control these third-party websites
            and are not responsible for their privacy policies. When you leave
            our website or our app, we encourage you to read the privacy policy
            of every website you visit.
          </p>
          <h3>1.3 KEY TERMS</h3>
          <p>
            Comply with a legal or regulatory obligation means processing your
            personal data where it is necessary for compliance with a legal or
            regulatory obligation that we are subject to.
          </p>
          <p>
            Consent means freely given, specific, informed and unambiguous
            indication of a data subject's wishes which is indicated by a
            positive action.
          </p>
          <p>External Third Parties means:</p>
          <ul>
            <li>
              Service providers acting as processors who provide IT and system
              administration services.
            </li>
            <li>
              Professional advisers acting as processors or joint controllers
              including lawyers, bankers, auditors and insurers who provide
              consultancy, banking, legal, insurance and accounting services.
            </li>
            <li>
              HM Revenue & Customs, regulators and other authorities acting as
              processors or joint controllers based who require reporting of
              processing activities in certain circumstances.{' '}
            </li>
            <li>
              Other third we may contract with, which may include, but is not
              limited to, marketing communications and market research agencies,
              fraud prevention agencies.
            </li>
          </ul>
          <p>
            Legitimate Interest means the interest of our organisation in
            conducting and managing our business to enable us to give you the
            best service and the best and most secure experience. We make sure
            we consider and balance any potential impact on you (both positive
            and negative) and your rights before we process your personal data
            for our legitimate interests. We do not use your personal data for
            activities where our interests are overridden by the impact on you
            (unless we have your consent or are otherwise required or permitted
            to by law). You can obtain further information about how we assess
            our legitimate interests against any potential impact on you in
            respect of specific activities by contacting us.
          </p>
          <p>
            Performance of Contract means processing your data where it is
            necessary for the performance of a contract to which you are a party
            or to take steps at your request before entering into such a
            contract. We, us, our means London LGBT Community Pride CIC, a
            community interest company (registered number 08321669) and having
            its registered office at Cannon Place, 78 Cannon Street, London,
            EC4N 6AF.
          </p>
          <h3>1.4 THE DATA WE COLLECT ABOUT YOU</h3>
          <p>
            Personal data, or personal information, means any information about
            a living individual from which that person can be identified. It
            does not include data where it is no longer possible to identity the
            person (anonymous data).
          </p>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together follows:
          </p>
          <ul>
            <li>
              Identity Data includes first name, last name, username or similar
              identifier, relationship/ marital status, title, date of birth and
              gender identifier.
            </li>
            <li>
              Contact Data includes billing address, delivery address, email
              address and telephone numbers. Financial Data includes bank
              account and payment card details.
            </li>
            <li>
              Transaction Data includes details about payments to and from you
              and other details of products and services you have purchased from
              us.
            </li>
            <li>
              Technical Data includes internet protocol (IP) address, your login
              data, browser type and version, time zone setting and location,
              browser plug-in types and versions, operating system and platform
              and other technology on the devices you use to access this website
              and/or our app.
            </li>
            <li>
              Profile Data includes your username and password, purchases or
              orders made by you, your interests, preferences, feedback and
              survey responses.
            </li>
            <li>
              Usage Data includes information about how you use our website
              and/or our app, products and services.
            </li>
            <li>
              Marketing and Communications Data includes your preferences in
              receiving marketing from us and our third parties and your
              communication preferences.
            </li>
            <li>
              Sensitive Personal Data includes information about your racial or
              ethnic origin, political opinions, religious beliefs,
              philosophical beliefs or trade union membership, data concerning
              health, sex life or sexual orientation.
            </li>
          </ul>
          <p>
            We also collect, use and share Aggregated Data such as statistical
            or demographic data for any purpose. Aggregated Data may be derived
            from your personal data but is not considered personal data in law
            as this data does not directly or indirectly reveal your identity.
            For example, we may aggregate your Usage Data to calculate the
            percentage of users accessing a specific website or app feature.
            However, if we combine or connect Aggregated Data with your personal
            data so that it can directly or indirectly identify you, we treat
            the combined data as personal data which will be used in accordance
            with this privacy policy.
          </p>
          <h3>1.5 HOW IS YOUR PERSONAL DATA COLLECTED?</h3>
          <p>
            We use different methods to collect data from and about you
            including through:
          </p>
          <ul>
            <li>
              Direct interactions. You may give us your personal data by filling
              in forms on our website and/or our app or by corresponding with us
              by post, phone, email or otherwise. This includes personal data
              you provide when you:
              <ul style={{ listStyleType: 'none' }}>
                <li>
                  purchase products from our website or tickets for our events;
                </li>
                <li>apply to volunteer;</li>
                <li>donate to us;</li>
                <li>subscribe to our mailing list;</li>
                <li>
                  complete any other forms on our website (such as “report an
                  issue” forms);
                </li>
                <li>
                  enter a competition (such as Pride’s Got Talent) or any
                  promotion;
                </li>
                <li>give us some feedback; or</li>
                <li>participate in our surveys or research studies</li>
              </ul>
            </li>
            <li>
              Third parties. We may receive personal data about you from various
              third parties as set out below:
            </li>
            <li>
              Identity Data from the following parties:
              <ul style={{ listStyleType: 'lower-alpha' }}>
                <li>event organisers for third party events;</li>
              </ul>
            </li>
            <li>
              Technical Data from the following parties:
              <ul style={{ listStyleType: 'lower-alpha' }}>
                <li>
                  analytics providers such as Google Analytics (based outside
                  the EU).
                </li>
              </ul>
            </li>
          </ul>
          <h2>2. HOW WE USE YOUR PERSONAL DATA</h2>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul>
            <li>
              Where we need to perform the contract we are about to enter into
              or have entered into with you.
            </li>
            <li>
              Where it is necessary for our legitimate interests (or those of a
              third party) and your interests and fundamental rights do not
              override those interests.
            </li>
            <li>
              Where we need to comply with a legal or regulatory obligation.
              Where you have given us specific and informed consent.
            </li>
          </ul>
          <p>
            See section 1.3 of this policy above find out more about the types
            of lawful basis that we will rely on to process your personal data.
          </p>
          <p>
            Generally we do not rely on consent as a legal basis for processing
            your personal data other than in relation to sending third party
            direct marketing communications to you via email or text message or
            in relation to your participation in our surveys and/or research
            studies. You have the right to withdraw consent to marketing, and
            your participation of surveys or research at any time by contacting
            us, for our contact details, see below.
          </p>
          <h2>3. PURPOSES FOR WHICH WE WILL USE YOUR PERSONAL DATA</h2>
          <p>
            We have set out below a description of all the ways we plan to use
            your personal data, and which of the legal bases we rely on to do
            so. We have also identified what our legitimate interests are where
            appropriate.
          </p>
          <p>
            Note that we may process your personal data for more than one lawful
            ground depending on the specific purpose for which we are using your
            data. Please contact us if you need details about the specific legal
            ground we are relying on to process your personal data where more
            than one ground has been set out in the table below.
          </p>
          <ResponsiveTable
            responsive
            columns={[
              'PURPOSE/ACTIVITY',
              'TYPE OF DATA',
              'LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF LEGITIMATE INTEREST',
            ]}
          >
            <thead>
              <tr>
                <th>PURPOSE/ACTIVITY</th>
                <th>TYPE OF DATA</th>
                <th>
                  LAWFUL BASIS FOR PROCESSING INCLUDING BASIS OF LEGITIMATE
                  INTEREST
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>To enable you to:</p>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>volunteer with us;</li>
                    <li>
                      attend and participate in our festivals and parades and
                      other events (e.g. march in a parade or host a stall at
                      our events);
                    </li>
                    <li>donate to us; and</li>
                    <li>
                      to enable us to Manage payments, fees and charges and
                      collect and recover money owed to us.
                    </li>
                  </ul>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Identity</li>
                    <li>Contact</li>
                    <li>Financial</li>
                    <li>Transaction</li>
                    <li>Marketing and Communications</li>
                  </ul>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Performance of a contract with you</li>
                    <li>
                      Necessary for our legitimate interests (to recover debts
                      due to us, and to promote and support the LGBTQ community)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    To allow you to sign up for our mailing list, or, remove you
                    where you no longer wish to receive our updates
                  </p>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Identity</li>
                    <li>Contact</li>
                    <li>Profile</li>
                    <li>Marketing and Communications</li>
                  </ul>
                </td>
                <td>
                  <p>Consent</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>To manage our relationship with you which will include:</p>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>
                      notifying you about changes to our terms or privacy
                      policy; and
                    </li>
                  </ul>
                  <p>
                    any other activity relating to the management of our
                    relationship with you.
                  </p>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Identity</li>
                    <li>Contact</li>
                    <li>Profile</li>
                    <li>Marketing and Communications</li>
                  </ul>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Performance of a contract with you</li>
                    <li>Necessary to comply with a legal obligation</li>
                    <li>
                      Necessary for our legitimate interests (to keep our
                      records updated)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    To administer and protect our organisation and this website
                    and/or our app (including troubleshooting, data analysis,
                    testing, system maintenance, support, reporting and hosting
                    of data)
                  </p>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Identity</li>
                    <li>Contact</li>
                    <li>Technical</li>
                  </ul>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>
                      Necessary for our legitimate interests (for running our
                      organisation, provision of administration and IT services,
                      network security, to prevent fraud)
                    </li>
                    <li>Necessary to comply with a legal obligation</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    To deliver relevant website and/or app content and
                    advertisements to you and measure or understand the
                    effectiveness of the advertising we serve to you
                  </p>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Identity</li>
                    <li>Contact</li>
                    <li>Profile</li>
                    <li>Usage</li>
                    <li>Marketing and Communications</li>
                    <li>Technical</li>
                  </ul>
                </td>
                <td>
                  <p>
                    Necessary for our legitimate interests (to study how users
                    of our website and/or our app use our services and to inform
                    our marketing strategy)
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    To use data analytics to improve our website and/or our app,
                    events, products and services and marketing
                  </p>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Technical</li>
                    <li>Usage</li>
                  </ul>
                </td>
                <td>
                  <p>
                    Necessary for our legitimate interests (to develop our
                    products/services and grow our organisation)
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    To enable you to take part in our surveys and research and
                    to allow us to report on the outcome of our research.
                  </p>
                </td>
                <td>
                  <ul style={{ listStyleType: 'lower-alpha' }}>
                    <li>Identity</li>
                    <li>Contact</li>
                    <li>Technical</li>
                    <li>Usage</li>
                    <li>Profile</li>
                    <li>Aggregated Data</li>
                    <li>Sensitive Personal Data</li>
                  </ul>
                </td>
                <td>
                  <p>Consent</p>
                </td>
              </tr>
            </tbody>
          </ResponsiveTable>
          <h2>4. MARKETING</h2>
          <p>
            We strive to provide you with choices regarding certain personal
            data uses, particularly around marketing and advertising. If you
            change your mind and no longer wish to receive such communications
            or wish to change your preferences, you can opt out at any time by
            contacting us using the details provided below.
          </p>
          <p>
            We may use your Identity, Contact, Technical, Usage and Profile Data
            to form a view on what we think you may want or need, or what may be
            of interest to you. This is how we decide which products, services
            and offers may be relevant for you (we call this marketing).
          </p>
          <p>
            You will receive marketing communications from us if you have
            requested information from us or purchased goods or services from us
            or if you provided us with your details when you entered a
            competition or registered for a promotion and, in each case, you
            have not opted out of receiving that marketing.
          </p>
          <h2>5. THIRD-PARTY MARKETING</h2>
          <p>
            We will get your express opt-in consent before we share your
            personal data with any third party company for marketing purposes.
          </p>
          <h2>6. OPTING OUT</h2>
          <p>
            You can ask us or third parties to stop sending you marketing
            messages at any time by contacting us at any time.
          </p>
          <h2>7. CHANGE OF PURPOSE </h2>
          <p>
            We will only use your personal data for the purposes for which we
            collected it, unless we reasonably consider that we need to use it
            for another reason and that reason is compatible with the original
            purpose. If you wish to get an explanation as to how the processing
            for the new purpose is compatible with the original purpose, please
            contact us. If we need to use your personal data for an unrelated
            purpose, we will notify you and we will explain the legal basis
            which allows us to do so. Please note that we may process your
            personal data without your knowledge or consent, in compliance with
            the above rules, where this is required or permitted by law.
          </p>
          <h2>8. DISCLOSURES OF YOUR PERSONAL DATA</h2>
          <p>
            We may have to share your personal data with the parties set out
            below for the purposes set out in the table in section 3 above.
          </p>
          <ul>
            <li>
              External Third Parties as set out in section 1.3 of this policy.
            </li>
            <li>
              Third parties to whom we may choose to sell, transfer, or merge
              parts of our business or our assets. Alternatively, we may seek to
              acquire other businesses or merge with them. If a change happens
              to our business, then the new owners may use your personal data in
              the same way as set out in this privacy policy.
            </li>
          </ul>
          <p>
            We require all third parties to respect the security of your
            personal data and to treat it in accordance with the law. We do not
            allow our third-party service providers to use your personal data
            for their own purposes and only permit them to process your personal
            data for specified purposes and in accordance with our instructions.
          </p>
          <h2>9. INTERNATIONAL TRANSFERS </h2>
          <p>
            We do not transfer your personal data outside the European Economic
            Area (EEA).
          </p>
          <h2>10. DATA SECURITY</h2>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorised way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, volunteers, agents,
            contractors and other third parties who have a business need to
            know. They will only process your personal data on our instructions
            and they are subject to a duty of confidentiality. We have put in
            place procedures to deal with any suspected personal data breach and
            will notify you and any applicable regulator of a breach where we
            are legally required to do so.
          </p>
          <h2>11. DATA RETENTION</h2>
          <p>
            We will only retain your personal data for as long as necessary to
            fulfil the purposes we collected it for, including for the purposes
            of satisfying any legal, accounting, or reporting requirements.{' '}
          </p>
          <p>
            To determine the appropriate retention period for personal data, we
            consider the amount, nature, and sensitivity of the personal data,
            the potential risk of harm from unauthorised use or disclosure of
            your personal data, the purposes for which we process your personal
            data and whether we can achieve those purposes through other means,
            and the applicable legal requirements.
          </p>
          <p>
            Details of retention periods for different aspects of your personal
            data are available in our retention policy which you can request
            from us by contacting us. In some circumstances you can ask us to
            delete your data, for more information see section 12 below. In some
            circumstances we may anonymise your personal data (so that it can no
            longer be associated with you) for research or statistical purposes
            in which case we may use this information indefinitely without
            further notice to you.
          </p>
          <h2>12. INFORMATION ABOUT OUR USE OF COOKIES</h2>
          <p>
            Our website and/or our app uses cookies to distinguish you from
            other users of our website or app. This helps us to provide you with
            a good experience when you browse our website and/or use our app and
            also allows us to improve our site. By continuing to browse the
            site, you are agreeing to our use of cookies.
          </p>
          <p>
            A cookie is a small file of letters and numbers that we store on
            your browser or the hard drive of your computer if you agree.
            Cookies contain information that is transferred to your computer’s
            hard drive.
          </p>
          <p>We use the following cookies:</p>
          <ul>
            <li>
              Strictly necessary cookies. These are cookies that are required
              for the operation of our website and/or our app. They include, for
              example, cookies that enable you to log into secure areas of our
              website, use a shopping cart or make use of e-billing services.
            </li>
            <li>
              Analytical/performance cookies. They allow us to recognise and
              count the number of visitors and to see how visitors move around
              our website and/or our app when they are using it. This helps us
              to improve the way our website and/or our app works, for example,
              by ensuring that users are finding what they are looking for
              easily.
            </li>
            <li>
              Functionality cookies. These are used to recognise you when you
              return to our website and/or our app. This enables us to
              personalise our content for you, greet you by name and remember
              your preferences (for example, your choice of language or region).
            </li>
            <li>
              Targeting cookies. These cookies record your visit to our website
              and/or our app, the pages you have visited and the links you have
              followed. We will use this information to make our website and/or
              our app and the advertising displayed on it more relevant to your
              interests. We may also share this information with third parties
              for this purpose.
            </li>
          </ul>
          <p>
            You can find more information about the individual cookies we use
            and the purposes for which we use them in the table below:{' '}
          </p>
          <ResponsiveTable columns={['COOKIE', 'PURPOSE']}>
            <thead>
              <tr>
                <th>COOKIE</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>atuvc</p>
                </td>
                <td>
                  <p>Sharing functionality</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>fr</p>
                </td>
                <td>
                  <p>Facebook tracking cookie</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>_pinterest_cm</p>
                </td>
                <td>
                  <p>Social sharing, tracking, and advert targeting</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>IDE</p>
                  <p>1P_JAR</p>
                </td>
                <td>
                  <p>
                    Google advertising cookie used for user tracking and advert
                    targeting purposes
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>NID</p>
                  <p>SNID</p>
                  <p>SIDCC</p>
                </td>
                <td>
                  <p>
                    Google advertising cookie used for user tracking and advert
                    targeting purposes
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>NID</p>
                  <p>HSID</p>
                  <p>SAPISID</p>
                </td>
                <td>
                  <p>
                    Used by Google to store user preferences and information of
                    Google Maps
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>crumb</p>
                </td>
                <td>
                  <p>Cookie for fraud prevention</p>
                </td>
              </tr>
            </tbody>
          </ResponsiveTable>
          <p>
            Please note that third parties (including, for example, advertising
            networks and providers of external services like web traffic
            analysis services) may also use cookies, over which we have no
            control. These cookies are likely to be analytical/performance
            cookies or targeting cookies.
          </p>
          <p>
            You block cookies by activating the setting on your browser that
            allows you to refuse the setting of all or some cookies. However, if
            you disable or refuse cookies, please note that some parts of this
            website and /or our app may become inaccessible or not function
            properly.
          </p>
          <h2>13. YOUR LEGAL RIGHTS</h2>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data. In particular, you have the
            following rights which you can exercise free of charge, by
            contacting us via the details below:
          </p>
          <p>
            Access - The right to be provided with a copy of your personal data
            (the right of access).
          </p>
          <p>
            Rectification - The right to require us to correct any mistakes in
            your personal data.
          </p>
          <p>
            To be forgotten - The right to require us to delete your personal
            data—in certain situations.
          </p>
          <p>
            Restriction of processing - The right to require us to restrict
            processing of your personal data—in certain circumstances, e.g. if
            you contest the accuracy of the data.
          </p>
          <p>
            Data portability - The right to receive the personal data you
            provided to us, in a structured, commonly used and machine-readable
            format and/or transmit that data to a third party—in certain
            situations
          </p>
          <p>To object - The right to object:</p>
          <ul>
            <li>
              at any time to your personal data being processed for direct
              marketing (including profiling);
            </li>
            <li>
              in certain other situations to our continued processing of your
              personal data, e.g. processing carried out for the purpose of our
              legitimate interests.
            </li>
          </ul>
          <p>
            Not to be subject to automated individual decision-making - The
            right not to be subject to a decision based solely on automated
            processing (including profiling) that produces legal effects
            concerning you or similarly significantly affects you.
          </p>
          <p>
            You will not have to pay a fee to access your personal data (or to
            exercise any of the other rights). However, we may charge a
            reasonable fee if your request is clearly unfounded, repetitive or
            excessive. Alternatively, we may refuse to comply with your request
            in these circumstances.
          </p>
          <p>
            We may need to request specific information from you to help us
            confirm your identity and ensure your right to access your personal
            data (or to exercise any of your other rights). This is a security
            measure to ensure that personal data is not disclosed to any person
            who has no right to receive it. We may also contact you to ask you
            for further information in relation to your request to speed up our
            response.
          </p>
          <p>
            We try to respond to all legitimate requests within one month.
            Occasionally it may take us longer than a month if your request is
            particularly complex or you have made a number of requests. In this
            case, we will notify you and keep you updated.{' '}
          </p>
          <h2>14. HOW TO CONTACT US</h2>
          <p>
            Please contact us and/or our Data Protection Officer by post or
            email if you have any questions about this privacy policy or the
            information we hold about you using the details shown below:
          </p>
          <address>
            London LGBT Community Pride CIC
            <br />
            PO Box 71920, London NW2 9QN
            <br />
            <a
              href="mailto:info@prideinlondon.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@prideinlondon.org
            </a>
          </address>
          <address>
            Matthew Kent, Data Protection Officer London
            <br />
            LGBT Community Pride CIC
            <br />
            PO Box 71920, London NW2 9QN
            <br />
            <a
              href="mailto:matthewk@pridenlondon.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              matthewk@pridenlondon.org
            </a>
          </address>

          <h2>15. CHANGES TO OUR PRIVACY POLICY</h2>
          <p>
            This version was last updated on 24 May 2018 and historic versions
            can be obtained by contacting us at the details provided above.
          </p>
          <h2>16. HOW TO COMPLAIN</h2>
          <p>
            We hope that our Data Protection Officer can resolve any query or
            concern you may raise about our use of your information.
          </p>
          <p>
            The General Data Protection Regulation also gives you right to lodge
            a complaint with a supervisory authority, in particular in the
            European Union (or European Economic Area) state where you work,
            normally live or where any alleged infringement of data protection
            laws occurred. The supervisory authority in the UK is the
            Information Commissioner who may be contacted at{' '}
            <a
              href="http://ico.org.uk/concerns"
              rel="noopener noreferrer"
              target="_blank"
            >
              http://ico.org.uk/concerns
            </a>{' '}
            or telephone: 0303 123 1113.
          </p>
        </Column>
      </Row>
    </Container>
  </>
)

export default PrivacyPolicyPage
