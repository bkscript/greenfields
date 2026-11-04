(function () {
  "use strict";

  const form = document.getElementById("km-form");
  if (!form) return;

  const dialog = document.getElementById("km-dialog");
  const message = document.getElementById("km-form-message");
  const messageLabel = document.getElementById("km-message-label");
  const generatedMessage = document.getElementById("km-generated-message");
  const copyButton = document.getElementById("km-copy");
  const roleOptions = form.querySelectorAll('input[name="role"]');

  document.querySelectorAll("[data-km-mode]").forEach(function (link) {
    link.addEventListener("click", function () {
      const option = form.querySelector(
        'input[name="role"][value="' + link.dataset.kmMode + '"]'
      );
      if (option) {
        option.checked = true;
        option.dispatchEvent(new Event("change", { bubbles: true }));
      }
      if (!dialog.open) dialog.showModal();
      form.elements.name.focus();
    });
  });

  document.querySelectorAll("[data-km-open]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (!dialog.open) dialog.showModal();
      form.elements.name.focus();
    });
  });

  document.querySelectorAll("[data-km-close]").forEach(function (button) {
    button.addEventListener("click", function () {
      dialog.close();
    });
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  roleOptions.forEach(function (option) {
    option.addEventListener("change", function () {
      const condition = form.elements.condition;
      const purchaseOption = condition.querySelector(
        'option[value="खरीद की मांग"]'
      );
      if (purchaseOption) purchaseOption.hidden = option.value === "seller";
      if (option.value === "seller" && condition.value === "खरीद की मांग") {
        condition.value = "";
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const role = values.get("role");
    const roleLabel = role === "seller" ? "केर बेचने की जानकारी" : "केर खरीदने की जानकारी";
    const text = [
      "नमस्ते, मुझे केर के संबंध में संपर्क करना है।",
      "ज़रूरत: " + roleLabel,
      "नाम: " + values.get("name").trim(),
      "गांव / जिला: " + values.get("location").trim(),
      "मात्रा: " + values.get("quantity").trim(),
      "केर की स्थिति: " + values.get("condition"),
      "फोन: " + values.get("phone").trim()
    ].join("\n");

    generatedMessage.value = text;
    messageLabel.hidden = false;
    copyButton.hidden = false;

    const configuredPhone = String(window.MB && MB.KER_MARKET_PHONE || "")
      .replace(/\D/g, "");
    if (configuredPhone.length >= 8) {
      const whatsappUrl =
        "https://wa.me/" + configuredPhone + "?text=" + encodeURIComponent(text);
      window.open(whatsappUrl, "_blank", "noopener");
      message.textContent =
        "संदेश तैयार है। WhatsApp खुलने पर भेजने से पहले जानकारी जांच लें; सौदा अपने आप पक्का नहीं होता।";
    } else {
      message.textContent =
        "संदेश तैयार है, लेकिन इस पेज पर संपर्क नंबर सक्रिय नहीं है। इसे कॉपी करके अपने चुने हुए माध्यम से साझा करें।";
    }
  });

  copyButton.addEventListener("click", function () {
    generatedMessage.focus();
    generatedMessage.select();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(generatedMessage.value).then(
        function () {
          message.textContent = "संदेश कॉपी हो गया।";
        },
        function () {
          message.textContent = "संदेश चुन लिया गया है; कॉपी करने के लिए Ctrl+C दबाएं।";
        }
      );
      return;
    }
    message.textContent = "संदेश चुन लिया गया है; कॉपी करने के लिए Ctrl+C दबाएं।";
  });
})();
