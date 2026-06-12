import { Link } from 'react-router-dom'
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data/siteData'

const sections = [
  {
    title: 'Who we are',
    content: (
      <>
        <p>
          This website is operated by All Set Digital Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;), a web design and digital services provider based in the United
          Kingdom. We are the &ldquo;data controller&rdquo; of any personal information you share
          with us through this website, by phone, email or any of our forms.
        </p>
        <p className="mt-4">
          Contact:{' '}
          <a href={EMAIL_HREF} className="text-emerald-600 hover:underline">
            {EMAIL}
          </a>{' '}
          · Phone:{' '}
          <a href={PHONE_HREF} className="text-emerald-600 hover:underline">
            {PHONE}
          </a>
        </p>
      </>
    ),
  },
  {
    title: 'The information we collect',
    list: [
      'Contact details you give us via our forms, email or phone (name, business name, email address, phone number, project details).',
      'Technical data such as IP address, browser type, device information and pages visited, collected automatically.',
      'Cookies and similar technologies used for essential site functions and, where consented, basic analytics.',
    ],
  },
  {
    title: 'How we use your information',
    intro: 'We use your information to:',
    list: [
      'Respond to enquiries and provide quotes or consultations.',
      'Deliver the web design, SEO and related services you have requested.',
      'Send service updates, invoices and project communications.',
      'Improve our website, services and customer experience.',
      'Comply with our legal and regulatory obligations.',
    ],
  },
  {
    title: 'Lawful basis for processing',
    intro: 'Under the UK GDPR and the Data Protection Act 2018, we rely on the following lawful bases:',
    list: [
      'Consent, when you submit a contact form or opt in to communications.',
      'Contract, to deliver services you have engaged us for.',
      'Legitimate interests, to run, improve and protect our business.',
      'Legal obligation, to meet tax, accounting and regulatory duties.',
    ],
  },
  {
    title: 'Sharing your information',
    content: (
      <p>
        We do not sell your personal information. We only share it with trusted service providers
        who help us run our business (for example email, hosting, analytics and accounting tools),
        and with authorities where required by law. Where data leaves the UK, we use providers that
        offer appropriate safeguards in line with UK GDPR.
      </p>
    ),
  },
  {
    title: 'How long we keep it',
    content: (
      <p>
        We keep enquiry data for up to 24 months from your last contact, and client records for up to
        7 years to meet UK accounting and tax requirements. After that, your data is securely
        deleted or anonymised.
      </p>
    ),
  },
  {
    title: 'Your rights',
    intro: 'Under UK GDPR you have the right to:',
    list: [
      'Access the personal data we hold about you.',
      'Request correction of inaccurate data.',
      'Request erasure of your data (the "right to be forgotten").',
      'Restrict or object to processing.',
      'Request data portability.',
      'Withdraw consent at any time.',
    ],
    outro: (
      <p className="mt-4">
        To exercise any of these rights, email{' '}
        <a href={EMAIL_HREF} className="text-emerald-600 hover:underline">
          {EMAIL}
        </a>
        . You also have the right to complain to the UK Information Commissioner&apos;s Office (ICO)
        at{' '}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline"
        >
          ico.org.uk
        </a>
        .
      </p>
    ),
  },
  {
    title: 'Cookies',
    content: (
      <p>
        We use a small number of cookies to make this site work and to understand how visitors use
        it. You can control cookies through your browser settings. Disabling cookies may affect how
        the site functions.
      </p>
    ),
  },
  {
    title: 'Security',
    content: (
      <p>
        We use appropriate technical and organisational measures to protect your information.
        However, no online transmission is 100% secure and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: 'Changes to this policy',
    content: (
      <p>
        We may update this policy from time to time. The latest version will always be available on
        this page with the &ldquo;last updated&rdquo; date.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition hover:text-emerald-700"
        >
          ← Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: 13 May 2026</p>

        <div className="mt-10 space-y-10">
          {sections.map((section, index) => (
            <article key={section.title}>
              <h2 className="text-lg font-semibold text-slate-900">
                {index + 1}. {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-slate-600">
                {section.content}
                {section.intro && <p>{section.intro}</p>}
                {section.list && (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.outro}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
