
const form = document.getElementById("generatorForm");
const host_result = document.getElementById("host_result");
const wp_result = document.getElementById("wp_result");
const divi_result = document.getElementById("divi_result");

// Template ข้อความ
const host_template = `
รหัสเข้าจัดการ Hosting Direct admin

1. รหัสเข้าจัดการ Hosting DirectAdmin เว็บไซต์ {{domain}}
   Username: {{host_user}}
   Password: {{host_password}}
   To log in immediately, follow this link, using your username and password: {{host_ip}}

   เว็บไซต์ {{domain}}
   เมื่อลูกค้าได้รับ UserName และ Password แล้ว ถือว่าเป็นการมอบงานเว็บไซต์ อยู่ในความรับผิดชอบของลูกค้า หากเกิดปัญหาจากการพัฒนาหรือแก้ไข ลูกค้าเป็นผู้รับผิดชอบเอง

* หลังมอบงาน ทีมงานยังคงดูแลในส่วนของเซิร์ฟเวอร์ เพื่อให้เว็บไซต์ออนไลน์ 24 ชั่วโมง ตามเงื่อนไขของการให้บริการเช่าเซิร์ฟเวอร์
* กรณีแก้ไขเปลี่ยนแปลงข้อมูล หรือพัฒนาเว็บไซต์ เรามีทีมงานบริการลูกค้า ในราคาพิเศษ
* กรุณาศึกษาเงื่อนไขในการ Support ที่เอกสารเสนอราคา หรือ ศึกษาเงื่อนไขการบริการต่างๆ ได้ที่ Terms and Conditions https://www.websitegang.com/term-condition/
* เพื่อความปลอดภัยของเว็บไซต์ กรุณาเปลี่ยนพาสเวิร์ดบ่อยๆ อัพเดตโปรแกรมเมื่อถึงวาระ
* เรามีระบบ Backup วันอาทิตย์ กรณีเว็บไซต์มีปัญหากรุณาแจ้งทีมงานก่อนที่จะมีการ Backup ทับซ้ำ หรือลูกค้าควรสำรองข้อมูลเอง เพื่อความปลอดภัย
* กรณีลง PlugIn และ Theme ที่ไม่ได้มาตราฐานอาจเป็นสาเหตุให้เว็บไซต์ล่มหรือ ถูกแฮ็ค ลูกค้าเป็นผู้รับผิดชอบ จะมีค่าใช้จ่ายในการแก้ไข ลูกค้าสามารถแก้ไข เปลี่ยนแปลงข้อมูลได้ด้วยตัวเองได้ด้วย Password ที่มอบให้การย้ายข้อมูลเว็บไซต์ไปใช้บริการโฮสต์ที่อื่นถือว่าสิ้นสุดสัญญา และการย้ายไม่สามารถนำ Theme license หรือ License Plugin ที่เราลงให้ ไปใช้ในโฮสต์อื่นได้ เช่น DIVI theme, elementor pro และ Crocoblock เป็น license ที่ให้บริการเฉพาะในโฮสต์ของ WG เท่านั้น ซึ่งโปรแกรมเหล่านี้มีราคาสูง และคิดเป็นรายปี แต่เราคิดค่าบริการรายปีลูกค้าเพียง 15% จากยอดค่า license ที่เกิดขึ้นจริง หากตรวจพบว่ามีการนำไปใช้ที่อื่น อาจมีความผิดตามกฏหมาย 
  "เพื่อให้เว็บไซต์มีความปลอดภัย และมีเสถียรภาพ จึงขอแนะนำดังนี้"
* ไม่ควรลงโปรแกรม theme หรือ plugin ที่ไม่มีคุณภาพอาจทำให้เว็บไซต์เสียหาย
* ในกรณีจ้างเจ้าหน้าที่ไอทีควรเลือกเจ้าหน้าที่ที่เชี่ยวชาญ WordPress หรือใช้บริการเสริมหลังการขายของเราในราคาพิเศษ
* แนะนำวิธีการอัพเดทโปรแกรมในเว็บไซต์ https://www.websitegang.com/update-program/
* การแก้ไขเปลี่ยนแปลงข้อมูลสามารถศึกษาได้ทั่วไป เนื่องจาก website รันด้วย wordpress กรุณาศึกษาข้อตกลงต่างๆ เพิ่มเติมเพื่อสิทธฺและประโยชน์ของลูกค้า ตามลิ้งค์ https://www.websitegang.com/term-condition/
`;

///////////////////////////////////

const wp_template = `
  เว็บไซต์ {{domain}}
  ลิ้งค์ล็อกอินเข้าหลังบ้านเว็บไซต์ https://{{domain}}/wp-admin/
  username: {{wp_user}}
  password: {{wp_password}}
  Email สำหรับกู้รหัส : {{wp_email}}
  เมื่อลูกค้าได้รับ UserName และ Password แล้ว ถือว่าเป็นการมอบงานเว็บไซต์ อยู่ในความรับผิดชอบของลูกค้า หากเกิดปัญหาจากการพัฒนาหรือแก้ไข ลูกค้าเป็นผู้รับผิดชอบเอง

  * หลังมอบงาน ทีมงานยังคงดูแลในส่วนของเซิร์ฟเวอร์ เพื่อให้เว็บไซต์ออนไลน์ 24 ชั่วโมง ตามเงื่อนไขของการให้บริการเช่าเซิร์ฟเวอร์
  * กรณีแก้ไขเปลี่ยนแปลงข้อมูล หรือพัฒนาเว็บไซต์ เรามีทีมงานบริการลูกค้า ในราคาพิเศษ
  * กรุณาศึกษาเงื่อนไขในการ Support ที่เอกสารเสนอราคา หรือ ศึกษาเงื่อนไขการบริการต่างๆ ได้ที่ Terms and Conditions https://www.websitegang.com/term-condition/
  * เพื่อความปลอดภัยของเว็บไซต์ กรุณาเปลี่ยนพาสเวิร์ดบ่อยๆ อัพเดตโปรแกรมเมื่อถึงวาระ
  * เรามีระบบ Backup วันอาทิตย์ กรณีเว็บไซต์มีปัญหากรุณาแจ้งทีมงานก่อนที่จะมีการ Backup ทับซ้ำ หรือลูกค้าควรสำรองข้อมูลเอง เพื่อความปลอดภัย
  * กรณีลง PlugIn และ Theme ที่ไม่ได้มาตราฐานอาจเป็นสาเหตุให้เว็บไซต์ล่มหรือถูกแฮ็ค ลูกค้าเป็นผู้รับผิดชอบ จะมีค่าใช้จ่ายในการแก้ไข ลูกค้าสามารถแก้ไข เปลี่ยนแปลงข้อมูลได้ด้วยตัวเองได้ด้วย Password ที่มอบให้การย้ายข้อมูลเว็บไซต์ไปใช้บริการโฮสต์ที่อื่นถือว่าสิ้นสุดสัญญา และการย้ายไม่สามารถนำ Theme license หรือ License Plugin ที่เราลงให้ ไปใช้ในโฮสต์อื่นได้ เช่น DIVI theme, elementor pro และ Crocoblock เป็น license ที่ให้บริการเฉพาะในโฮสต์ของ WG เท่านั้น ซึ่งโปรแกรมเหล่านี้มีราคาสูง และคิดเป็นรายปี แต่เราคิดค่าบริการรายปีลูกค้าเพียง 15% จากยอดค่า license ที่เกิดขึ้นจริง หากตรวจพบว่ามีการนำไปใช้ที่อื่น อาจจมีความผิดตามกฏหมาย
    "เพื่อให้เว็บไซต์มีความปลอดภัย และมีเสถียรภาพ จึงขอแนะนำดังนี้"
  * ไม่ควรลงโปรแกรม theme หรือ plugin ที่ไม่มีคุณภาพอาจทำให้เว็บไซต์เสียหาย
  * ในกรณีจ้างเจ้าหน้าที่ไอทีควรเลือกเจ้าหน้าที่ที่เชี่ยวชาญ WordPress หรือใช้บริการเสริมหลังการขายของเราในราคาพิเศษ
  * แนะนำวิธีการอัพเดทโปรแกรมในเว็บไซต์ https://www.websitegang.com/update-program/
  * การแก้ไขเปลี่ยนแปลงข้อมูลสามารถศึกษาได้ทั่วไป เนื่องจาก website รันด้วย wordpress
    กรุณาศึกษาข้อตกลงต่างๆ เพิ่มเติมเพื่อสิทธฺและประโยชน์ของลูกค้า ตามลิ้งค์ https://www.websitegang.com/term-condition/
`;

///////////////////////////////////

const divi_template = `คู่มือการใช้งานเบื้องต้น : https://www.websitegang.asia/knowledgebase/130/%E0%B8%84%E0%B8%A1%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B8%87%E0%B8%B2%E0%B8%99-Theme-Divi`;

///////////////////////////////////

// สร้างข้อความ
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = Object.fromEntries(
    new FormData(form).entries()
  );

  let host_output = host_template;

  Object.entries(data).forEach(([key, value]) => {
    host_output = host_output.replaceAll(
      `{{${key}}}`,
      value.trim()
    );
  });

  host_result.value = host_output;

  ///////////////////////////////////////////

  let wp_output = host_template;

  Object.entries(data).forEach(([key, value]) => {
    wp_output = wp_output.replaceAll(
      `{{${key}}}`,
      value.trim()
    );
  });

  wp_result.value = wp_output;

  ///////////////////////////////////////////

  let divi_output = divi_template;

  divi_result.value = divi_output;
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
