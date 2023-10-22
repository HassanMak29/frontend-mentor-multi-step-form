export default function ThankYou() {
  return (
    <section className="section">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-7">
        <img
          className="mb-4"
          src="/images/icon-thank-you.svg"
          alt="check icon"
        />
        <h1 className="text-3xl font-bold text-MarineBlue">Thank you!</h1>
        <p className="text-center text-sm text-CoolGray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </section>
  );
}
