---
title: Introduction to a Full-Stack Developer Career
description: An introduction to beginners who want to become a full-stack developer
date: 2020-05-01
slug: coding/full-stack-developer
tags:
  - coding
---

## แนะนำอาชีพนักพัฒนาซอฟต์แวร์

สวัสดีครับ ผมชื่อต้นกล้า ([@tonkla](https://twitter.com/tonkla)) ผมสนใจอยากทำพอดแคสท์สักช่องหนึ่ง ได้ศึกษาเก็บข้อมูลมาหลายเดือนแล้ว คิดว่าถ้าไม่เริ่มตอนนี้ก็คงจะไม่ได้เริ่มอีกเลย ผมทำช่องบน YouTube ชื่อ **Stradeji** ตั้งใจอยากนำเสนอเกี่ยวกับ algorithmic trading, software development & coding จากมุมมองของคนที่ไม่เก่ง แต่มีความสุขกับสิ่งที่ได้ทำ โดยบันทึกนี้เป็นบันทึกแรก ซึ่งตั้งใจจะทำให้เป็นสคริปท์ของพอดแคสท์ไปในตัว

ผมเลี้ยงชีพด้วยการเป็นนักพัฒนาซอฟต์แวร์มาตลอด 15 ปีของการทำงาน สมัยก่อนเราไม่ได้แยกชั้นของสถาปัตยกรรมซอฟต์แวร์ จึงไม่ได้มีการแยกว่าเป็น front-end developer / back-end developer เหมือนในปัจจุบัน นักพัฒนาหนึ่งคนต้องทำทุกอย่างตั้งแต่ต้นจนจบเป็นเรื่องปกติ มาถึงปัจจุบันจึงได้รู้ว่ามีชื่อตำแหน่งเท่ๆ สำหรับเรียกพวกเราด้วย ... สวัสดีชาวโลก พวกเราคือ **full-stack developer**

### ภาพรวมของวงการซอฟต์แวร์ในปี 2020

อาจกล่าวได้ว่าเศรษฐกิจโลกในยุคปัจจุบันถูกขับเคลื่อนด้วยเทคโนโลยีที่มีซอฟต์แวร์เป็นองค์ประกอบหลัก ถนนทุกสายมุ่งหน้าสู่ระบบปัญญาประดิษฐ์ (AI: Artificial Intelligence) นอกจากพีซี แล็ปท็อป และสมาร์ทโฟนแล้ว อุปกรณ์เครื่องใช้ไฟฟ้า เครื่องมือ ยานพาหนะ รุ่นใหม่ๆ ต่างก็ถูกออกแบบบมาให้มีซอฟต์แวร์ที่สามารถทำงานกับระบบอินเทอร์เน็ตได้ (IoT: Internet of Things) สถิติการใช้งานอินเทอร์เน็ตโลกจากหลายสำนักรายงานไปในทิศทางเดียวกันว่าเกิน 50% ของปริมาณทราฟิกมาจากโทรศัพท์มือถือ ([ref1](https://www.traffic-masters.net/mobile-percentage-of-traffic/), [ref2](https://hostingtribunal.com/blog/mobile-percentage-of-traffic/), [ref3](https://www.bluecorona.com/blog/mobile-marketing-statistics/)) และจะยิ่งเพิ่มสัดส่วนมากขึ้นไปอีก หากเครือข่าย 5G ถูกเปิดใช้งานอย่างแพร่หลาย

ด้วยเหตุนี้จึงทำให้วงการเว็บแอพพลิเคชันและโมบายแอพพลิเคชันเกิดการพัฒนาอย่างรวดเร็ว มีเทคโนโลยีเครื่องไม้เครื่องมือใหม่ๆ เกิดขึ้นอยู่ตลอดเวลา เทรนด์เปลี่ยนไปเรื่อยๆ สถาปัตยกรรมซอฟต์แวร์ในยุคปัจจุบันถูกออกแบบให้ทำงานเป็นแบบ client-server โดย client ที่มีการใช้งานหลักๆ คือ สมาร์ทโฟน แท็บเล็ต แล็ปท็อป และพีซี โดยใช้งานผ่านโมบายแอพพลิเคชัน และเว็บแอพพลิเคชันที่เรียกใช้ผ่านเว็บเบราว์เซอร์ ส่วน server มักทำเป็น cloud-based services ที่มีการทำงานแยกเป็นส่วนๆ เช่น API, database / datastore, authentication / authorization

### องค์ความรู้ที่ Full-Stack Developer ควรต้องมี

เครื่องมือพื้นฐานที่จำเป็นที่สุดสำหรับ developer คือ programming language ซึ่งในปัจจุบันมีภาษาให้เลือกใช้งานเป็นจำนวนมาก เช่น JavaScript, TypeScript, Go, Ruby, Python, Rust, Kotlin, Swift, Clojure, Nim, V, Java, C#, C, C++, PHP แต่ละภาษาต่างก็มีจุดเด่นจุดด้อย การเลือกใช้ขึ้นอยู่กับลักษณะงาน และความพึงพอใจของนักพัฒนา

นอกจากภาษาแล้ว ยังมีองค์ความรู้ที่จำเป็นอีกหลายอย่างสำหรับสถาปัตยกรรมซอฟต์แวร์แบบ client-server ได้มีผู้รวบรวม [web skills](https://andreasbm.github.io/web-skills/?compact) ไว้ละเอียดระดับหนึ่ง ซึ่งสามารถแบ่งกลุ่มหัวข้อหลักๆ ออกได้เป็น 3 ส่วน คือ client, server, และ operation แต่ละส่วนมีรายละเอียดปลีกย่อยออกไปอีกจำนวนมาก เช่น

Client: ส่วนติดต่อกับผู้ใช้ - front-end / user interface (UI)

* เว็บแอพพลิเคชัน: HTML, CSS, JavaScript

* โมบายแอพพลิเคชัน: PWA (Progressive Web App), hybrid app (Webview), cross-platform app, native app

Server: ส่วนประมวลผลหลังบ้าน - back-end

- เซอร์วิส (API / routing / controller / function)
- ฐานข้อมูล (database / datastore)
- การยืนยันตัวตน (authentication / authorization)

Operation:

- การติดตั้งและการดูแลรักษา (deployment, maintenance)
- ระบบเครือข่ายและประสิทธิภาพ (load balancing, CDN: content delivery network)

ในแต่ละส่วนมีเครื่องมือ ไลบรารี และเฟรมเวิร์คให้เลือกใช้อีกมากมาย เช่น

- Web app: [React](https://reactjs.org/), [Next](https://nextjs.org/), [Vue](https://vuejs.org/), [Nuxt](https://nuxtjs.org/), [Svelte](https://svelte.dev/), [Sapper](https://sapper.svelte.dev/), [Angular](https://angular.io/), [jQuery](https://jquery.com/)
- Mobile app: [React Native](https://reactnative.dev/), [Flutter](https://flutter.dev/), [Ionic](https://ionicframework.com/), [iOS native](https://developer.apple.com/), [Android native](https://developer.android.com/)
- API: [REST](https://en.wikipedia.org/wiki/Representational_state_transfer), [GraphQL](https://graphql.org/), [gRPC](https://grpc.io/),  [WebSocket](https://www.websocket.org/), [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Koa](https://koajs.com/), [Polka](https://github.com/lukeed/polka)
- Deployment: VPS, AWS, GCP, Azure, Docker, Kubernetes

เทรนด์ที่กำลังเป็นที่นิยมในยุค JavaScript เฟื่องฟูแบบปัจจุบันนี้คือ [JAMstack](https://jamstack.org/) (JavaScript, APIs, and Markup) คือการที่เรามี client เป็น static web pages วางไว้บน CDN แล้วติดต่อกับ server ที่เป็น cloud-based services มีจุดเด่นคือสามารถรับโหลดได้เยอะ ง่าย รวดเร็ว

### ความท้าทายของ Full-Stack Developer - Specialist vs. Generalist

ปัจจุบันมีเทคโนโลยีเกิดขึ้นใหม่อย่างมากมาย เกินศักยภาพที่นักพัฒนาคนหนึ่งจะเรียนรู้ เข้าใจ และชำนาญในทุกๆ หัวข้อได้ แม้ว่าในกลุ่มพวกเราจะมีมหาเทพที่ทำได้ดีทุกอย่างอยู่ก็จริง แต่ก็เป็นส่วนน้อยนิด (เป็นเพราะพวกมึงมันกาก ไม่มีความพยายามเอง -- เสียงไลฟ์โค้ช) บริษัทที่บริหารโดยคนรุ่นใหม่ที่เข้าใจความจริงข้อนี้ และมีเงินทุนมากพอ จึงเลือกที่จะจ้างคนที่มีความชำนาญในแต่ละด้านมาทำงานร่วมกัน ยกตัวอย่างบริษัท [Sea](https://career.seagroup.com/sg/) จากสิงคโปร์ (เจ้าของ Garena, Shopee) จาก[ลิงก์รับสมัครงาน](https://career.seagroup.com/search?keyword=&level=0&location_id=0&team_id=6) ตำแหน่ง Engineer จะเห็นว่าเขาแยกย่อยความชำนาญออกมาละเอียดยิบ ใช้คนอย่างน้อย 5 คน สำหรับงานที่ full-stack developer ในบริษัทไทยทำ 1 คน

ปัจจุบันเป็นยุคที่เราสามารถเลือกได้ว่าจะผลักดันตัวเองให้เติบโตไปในเส้นทางรู้ลึก (specialist) หรือรู้กว้าง (generalist) จากตัวอย่างรับสมัครงานบริษัท Sea จะเห็นว่าเขาแยกเป็น front-end developer และ back-end developer แล้วก็ยังรับตำแหน่ง full-stack developer อีกด้วย งาน front-end เป็นส่วนที่ต้องทำงานร่วมกับผู้ใช้ที่เป็นมนุษย์ มีอารมณ์เข้ามาเกี่ยวข้อง จึงต้องใช้ศิลป์นำศาสตร์ ส่วนงาน back-end ต้องจัดการกับข้อจำกัดของคอมพิวเตอร์และเครือข่าย จึงต้องใช้ศาสตร์นำศิลป์ ในขณะที่งานของ full-stack developer เป็นการสร้างสมดุลทั้งศาสตร์และศิลป์ไปพร้อมๆ กัน การเลือกสายงานจึงขึ้นอยู่กับความชอบของแต่ละบุคคล

เหนือสิ่งอื่นใด การพัฒนาซอฟต์แวร์ไม่ได้มีแค่การเขียนโค้ด สิ่งหนึ่งที่เราต้องทำเป็นประจำคือการศึกษาเรียนรู้องค์ความรู้และเทคโนโลยีใหม่ๆ อยู่เสมอ เพราะในวงการซอฟต์แวร์ปัจจุบัน การหยุดเดินก็คือการเดินถอยหลัง มีคนรุ่นใหม่เก่งๆ ที่พร้อมจะทดแทนเราอยู่ตลอดเวลา ... แถวนี้แม่งเถื่อน ใจไม่รักจริงอยู่ไม่ได้ ขอสุนทรียภาพแห่งการพัฒนาซอฟต์แวร์จงมีแด่ท่าน ❤

