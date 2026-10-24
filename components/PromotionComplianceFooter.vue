<template>
  <footer class="promotion-compliance" aria-label="Responsible gaming information">
    <div class="promotion-compliance__badges">
      <img
        src="/responsible-gaming/pagcor.webp"
        alt="PAGCOR"
        width="175"
        height="175"
        loading="lazy"
        decoding="async"
      >
      <img
        src="/responsible-gaming/age-restriction.webp"
        alt="Gambling can be addictive. Know when to stop. 21 and above only."
        width="88"
        height="32"
        loading="lazy"
        decoding="async"
      >
    </div>

    <p class="promotion-compliance__links">
      <span>WWW.PAGCOR.PH/REGULATORY</span>
      <span>KEEPITFUN@PAGCOR.PH</span>
    </p>

    <p class="promotion-compliance__message">
      GAMBLING DOESN'T GUARANTEE EARNINGS OR<br>
      FINANCIAL IMPROVEMENT. STAY WITHIN YOUR<br>
      LIMITS.
    </p>

    <img
      class="promotion-compliance__hotline"
      src="/responsible-gaming/support-hotline.webp"
      alt="Responsible gaming support hotline"
      width="130"
      height="72"
      loading="lazy"
      decoding="async"
    >
  </footer>
</template>

<style scoped>
.promotion-compliance {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 12.5rem;
  padding: 1.8rem 1rem 2rem;
  color: #ffffff;
  text-align: center;
}

.promotion-compliance__badges {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
}

.promotion-compliance__badges img:first-child {
  width: 2.55rem;
  height: 2.55rem;
  object-fit: contain;
  padding: 0.08rem;
  border-radius: 50%;
  background: #ffffff;
}

.promotion-compliance__badges img:last-child {
  width: 5.6rem;
  height: 2.25rem;
  object-fit: contain;
  padding: 0.25rem 0.32rem;
  border-radius: 0.36rem;
  background: #ffffff;
}

.promotion-compliance__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.7rem 0 0;
  color: #e43232;
  font-size: 0.42rem;
  font-weight: 800;
  gap: 0.7rem;
}

.promotion-compliance__message {
  margin: 0.38rem 0 0.55rem;
  color: #315fba;
  font-size: 0.52rem;
  font-weight: 800;
  line-height: 1.35;
}

.promotion-compliance__hotline {
  width: 4.5rem;
  height: auto;
  object-fit: contain;
  padding: 0.2rem;
  border-radius: 0.2rem;
  background: #ffffff;
}

@media (max-width: 40rem) {
  .promotion-compliance {
    min-height: 10rem;
    padding-bottom: 4.6rem;
  }
}
</style>
