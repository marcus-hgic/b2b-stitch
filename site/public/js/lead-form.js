// HubSpot Lead Form — Vården.se B2B
(function () {
  'use strict';

  var PORTAL_ID = '7080361';
  var FORM_GUID = '533b5811-81a4-4aa9-be99-5cb3c4845098';
  var SUBSCRIPTION_TYPE_ID = 8387018;
  var ENDPOINT =
    'https://api.hsforms.com/submissions/v3/integration/submit/' +
    PORTAL_ID +
    '/' +
    FORM_GUID;

  // ── Modal ───────────────────────────────────────────────
  window.openLeadModal = function (prefilledCategory) {
    var modal = document.getElementById('lead-modal');
    if (!modal) return;
    if (prefilledCategory) {
      var sel = document.getElementById('lead-category');
      if (sel) sel.value = prefilledCategory;
    }
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    var first = modal.querySelector('input');
    if (first) first.focus();
  };

  window.closeLeadModal = function () {
    var modal = document.getElementById('lead-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  // Close on backdrop click
  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'lead-modal') window.closeLeadModal();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeLeadModal();
  });

  // ── Form submit ─────────────────────────────────────────
  window.submitLeadForm = function (e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Skickar...';

    var payload = {
      fields: [
        { name: 'company', value: form.clinicName.value },
        { name: 'firstname', value: form.contactName.value },
        { name: 'email', value: form.email.value },
        { name: 'phone', value: form.phone ? form.phone.value : '' },
        {
          name: 'message',
          value: form.category ? 'Kategori: ' + form.category.value : '',
        },
        {
          name: 'ar_du_privatperson_eller_foretag_',
          value: 'YuHEmw-69Ba0yOFfAUgtV',
        },
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'B2B Sajt \u2013 Leadformul\u00e4r',
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'Jag godk\u00e4nner att V\u00e5rden.se kontaktar mig ang\u00e5ende min f\u00f6rfr\u00e5gan.',
          communications: [
            {
              value: true,
              subscriptionTypeId: SUBSCRIPTION_TYPE_ID,
              text: 'Godk\u00e4nner kommunikation',
            },
          ],
        },
      },
    };

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        var wrapper = form.parentElement;
        wrapper.innerHTML =
          '<div style="text-align:center;padding:2rem">' +
          '<svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#055F72" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' +
          '<h3 style="margin:.75rem 0 .5rem;color:#181E29">Tack f\u00f6r din f\u00f6rfr\u00e5gan!</h3>' +
          '<p style="color:#566075">Vi h\u00f6r av oss inom 24 timmar.</p>' +
          '</div>';
        setTimeout(window.closeLeadModal, 3500);
      })
      .catch(function () {
        btn.disabled = false;
        btn.textContent = originalText;
        var err = form.querySelector('.form-error');
        if (!err) {
          err = document.createElement('p');
          err.className = 'form-error';
          err.style.cssText = 'color:#991B1B;margin-top:.5rem;font-size:.875rem';
          form.appendChild(err);
        }
        err.textContent =
          'N\u00e5got gick fel. F\u00f6rs\u00f6k igen eller kontakta salj@varden.se';
      });
  };
})();
