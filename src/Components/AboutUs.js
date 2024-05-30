import "../styles/AboutUs.css";
function AboutUs() {
    return (

<>
 <link
   href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
   rel="stylesheet"
 />
 <link
   rel="stylesheet"
   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
 />
 <div className="about-section">
   <div className="inner-container">
     <h1>About Us</h1>
     <p className="text">
       Đến với đồ án cho môn học này, tụi em đã quyết định rằng sẽ làm ra một
       trang web về âm nhạc, cụ thể là nghe nhạc. Bởi âm nhạc là một món ăn
       tinh thần chất lượng và không thể nào thiếu với mỗi người chúng ta, khi
       vui họ cũng nghe nhạc, buồn cũng thế, chơi hay học tương tự cũng như
       vậy. Để hiện thực ý tưởng lần này thì nhóm bọn em đã mượn ý tưởng từ một
       web cung cấp nhạc vô cùng chất lượng, đó là Spotify để làm nên trang web
       này. Dưới đây là thông tin cụ thể hơn về các thành viên có trong nhóm.

     </p>
   </div>

   
 </div>
<div className="rowContainer">
   <div className="row">
     <h1 id="ourteam"> Our Team</h1>
   </div>
   <div className="row">
     <div className="column">
       <div className="card">
         <div className="img-container">
            <img src="https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Avatar%2FBao.jpg?alt=media&token=88289705-68e7-4998-a96b-6531d8ac51cc" />
         </div>
         <h3>Hoàng Gia Bảo</h3>
         <p>CEO</p>
         <div className="icons">
           <a href="https://www.facebook.com/profile.php?id=100024826655699">
             <i className="fa-brands fa-facebook" />
           </a>
           <a href="#">
             <i className="fa-brands fa-linkedin" />
           </a>
           <a href="#">
             <i className="fa-brands fa-github" />
           </a>
         </div>
       </div>
     </div>
     <div className="column">
       <div className="card">
         <div className="img-container">
           <img src="https://firebasestorage.googleapis.com/v0/b/music-9ae9f.appspot.com/o/Avatar%2FNghia.jpg?alt=media&token=e8f2d29c-2e4a-4e35-bbae-6f91feebf787" />
         </div>
         <h3>Nguyễn Đại Nghĩa</h3>
         <p>COO/CFO</p>
         <div className="icons">
           <a href="https://www.facebook.com/profile.php?id=100024826655699">
             <i className="fa-brands fa-facebook" />
           </a>
           <a href="#">
             <i className="fa-brands fa-linkedin" />
           </a>
           <a href="#">
             <i className="fa-brands fa-github" />
           </a>
         </div>
       </div>
     </div>
     <div className="column">
       <div className="card">
         <div className="img-container">
         <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/438253527_1130582398129756_453196716170683339_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W6T3y7N3LuQQ7kNvgHdQEdX&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBJH54LjTlZQ6DNW6Eo3FIRA-iQesBKww30b2T1-3InaA&oe=665EB087" />


         </div>
         <h3>Phạm Hoàng Phúc</h3>
         <p>CPO</p>
         <div className="icons">
           <a href="https://www.facebook.com/profile.php?id=100035340200958">
             <i className="fa-brands fa-facebook" />
           </a>
           <a href="#">
             <i className="fa-brands fa-linkedin" />
           </a>
           <a href="#">
             <i className="fa-brands fa-github" />
           </a>
         </div>
       </div>
     </div>
     <div className="column">
       <div className="card">
         <div className="img-container">
         <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/67417162_926040867746540_8252247100499165184_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cnHEjdd7sIgQ7kNvgFKNJzY&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYDI1p85P9fMjAe8moYTZmFPclMfDh-7D-RoUjgHT6w2-g&oe=66805673" />

         </div>
         <h3>Lê Xuân Sơn</h3>
         <p>CTO</p>
         <div className="icons">
           <a href="https://www.facebook.com/Laggingman.01">
             <i className="fa-brands fa-facebook" />
           </a>
           <a href="#">
             <i className="fa-brands fa-linkedin" />
           </a>
           <a href="#">
             <i className="fa-brands fa-github" />
           </a>
         </div>
       </div>
     </div>
   </div>   
 </div>
</>
);
};
export { AboutUs };

