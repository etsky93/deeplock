# DeepLock — Context & Vision

## Cos'è DeepLock
DeepLock è il servizio di crypto custody di Moneyside. Offriamo custodia professionale di criptovalute per privati e aziende, con un'esperienza utente radicalmente diversa da qualsiasi altro operatore del settore.

DeepLock è costruito in partnership con **CheckSig** (checksig.com), il principale operatore italiano di crypto custody regolamentato. CheckSig gestisce la custodia tecnica e operativa; DeepLock si occupa di design, sales, marketing e esperienza utente. Il modello economico è 50/50.

**Ferdinando Ametrano** (CEO e co-fondatore di CheckSig, professore universitario, fondatore del Digital Gold Institute) è anche investitore di Moneyside.

---

## Posizionamento
- Servizio di custodia crypto aperto a tutti: privati e aziende
- Non siamo un exchange, non siamo un wallet fai-da-te
- Non diamo consigli finanziari — offriamo solo l'infrastruttura di custodia
- Comunicazione sempre legale, conforme MiCA, nessun claim di rendimento o arricchimento
- Brand completamente indipendente da CheckSig — design, tono e identità totalmente diversi

---

## Brand Identity
- **Tono**: elegante, serio, accessibile — come Disdici e Moneyside
- **Design**: glassmorphism, Apple style, dark mode first
- **Ispirazione UI**: niente che ricordi CheckSig — deve sembrare un prodotto Apple nel mondo crypto
- **Famiglia Moneyside**: stesso DNA di disdici.com e moneyside.app
- **Target**: chiunque voglia custodire crypto in modo sicuro e professionale, senza essere un esperto

---

## Stack Tecnico
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Hosting**: Vercel
- **Dominio**: deeplock.co
- **API**: integrazione con CheckSig API per custody, trading, staking
- **Auth**: Supabase Auth

---

## Features Pianificate
- [ ] Landing page (waitlist / early access)
- [ ] Onboarding utente (KYC via CheckSig)
- [ ] Dashboard custodia (saldi, depositi, prelievi)
- [ ] Deposito e prelievo crypto
- [ ] Piano di accumulo (DCA)
- [ ] Staking
- [ ] Reportistica fiscale (sostituto d'imposta via CheckSig)
- [ ] Area business (aziende)

---

## Compliance & Comunicazione
- **Vietato**: promesse di rendimento, "diventa ricco", consigli di investimento
- **Consentito**: descrivere il servizio, spiegare come funziona la custodia, comunicare sicurezza e trasparenza
- **Riferimento normativo**: MiCA (Markets in Crypto-Assets Regulation), VASP italiano
- CheckSig è l'unico operatore italiano con copertura assicurativa e SOC1/SOC2 — possiamo comunicarlo come punto di forza
- Proof of Reserves mensile — trasparenza totale sui fondi custoditi

---

## Struttura Progetto
```
/Users/emilioturco/Moneyside/deeplock/
```

## Organizzazione Moneyside
```
Moneyside/
  ├── Disdici/     → disdici.com
  └── deeplock/    → deeplock.co
```

---

## Note Importanti
- DeepLock non è CheckSig — mai citare CheckSig come "noi"
- Il backend di custody è CheckSig, ma l'utente vive solo dentro DeepLock
- Priorità assoluta: design superiore a qualsiasi competitor crypto italiano
- Sempre comunicare sicurezza, trasparenza, semplicità — mai hype
