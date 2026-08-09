const paths = {
  brain: (
    <>
      <path d="M12 5a3 3 0 0 1 3 3c1.6.4 3 1.7 3 3.4a3.2 3.2 0 0 1-1.5 3.6 3.5 3.5 0 0 1-3.5 3 2.8 2.8 0 0 1-3 .5V5Z" />
      <path d="M12 5a3 3 0 0 0-3 3c-1.6.4-3 1.7-3 3.4a3.2 3.2 0 0 0 1.5 3.6 3.5 3.5 0 0 0 3.5 3" />
      <path d="M12 5v3.5M12 12v4.5M9 8c-1.7 1-2.2 3-1 4.5M15 8c1.7 1 2.2 3 1 4.5M17.2 12H12M15 16.5h-3.2" />
    </>
  ),
  code: (
    <>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13 5-2 14" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m8 15 4-5 3 3 5-6" />
    </>
  ),
  wrench: (
    <>
      <path d="M15 5.5a5.5 5.5 0 0 0-7 7L3 17.6A1.4 1.4 0 0 0 5 19.6l5.1-5a5.5 5.5 0 0 0 7-7l-2.4 2.4-2.4.6-.6-2.4 2.3-2.1Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  graduation: (
    <>
      <path d="m2 10 10-5 10 5-10 5-10-5Z" />
      <path d="M6 12.5V17c0 .8 2.7 2.5 6 2.5s6-1.7 6-2.5v-4.5" />
      <path d="M22 10v5" />
    </>
  ),
  zap: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </>
  ),
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default Icon;