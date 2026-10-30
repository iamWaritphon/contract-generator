
const form = document.getElementById("generatorForm");
const result = document.getElementById("result");

// Template ข้อความ
const template = `เรียน {{customer}}

เรื่อง {{service}}

ขณะนี้{{status}}ครับ

{{detail}}

ขอบคุณครับ`;

// สร้างข้อความ
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = Object.fromEntries(
    new FormData(form).entries()
  );

  let output = template;

  Object.entries(data).forEach(([key, value]) => {
    output = output.replaceAll(
      `{{${key}}}`,
      value.trim()
    );
  });

  result.value = output;
});

// Copy
document.getElementById("copyBtn")
  .addEventListener("click", async function() {
    if (!result.value) return;

    await navigator.clipboard.writeText(result.value);
    this.textContent = "Copied!";
  });

// Reset
document.getElementById("resetBtn")
  .addEventListener("click", function() {
    form.reset();
    result.value = "";
    document.getElementById("copyBtn").textContent =
      "Copy ข้อความ";
  });
