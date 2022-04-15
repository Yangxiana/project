<template>
  <div class="box">
    <div class="one">
      <p>login</p>
      <form action="">
        <el-input v-model="input" placeholder="please enter one user name"></el-input><br />
        <el-input
          placeholder="Please input a password"
          v-model="password"
          show-password
        ></el-input>
        <el-input v-model="input2" placeholder="Please enter the name of the hospital"></el-input>
        <div class="two">
          <router-link to="/"><button class="btn">login</button></router-link>
          <button class="btn"><a href="./register.html">register</a></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      password: "",
      input2: "",
    };
  },
};
</script>
<style>
.box {
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #14a17e,
    #0fec6b,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #0fec6b 40%,
    #14a17e 65%,
    #f7f7b6
  );
  background-attachment: fixed;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }

  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
a {
  text-decoration: none;
  color: white;
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  bottom: 0;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
}

.star {
  width: 2px;
  height: 2px;
  background: #f7f7b6;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0 -300px;
  transform: translate3d(0, 0, -300px);
  backface-visibility: hidden;
}
.el-input__inner {
  width: 95%;
}

.one {
  width: 500px;
  height: 300px;
  background-color: white;
  margin: 500px auto;
  opacity: 0.9;
}

p {
  font-size: 25px;
  /* margin: 20px auto; */
  /* margin-top: 15px; */
  text-align: center;
}

label {
  font-size: 18px;
  margin-left: 20px;
}

input {
  width: 200px;
  height: 30px;
  margin: 20px 0 0 15px;
}

.one .btn {
  width: 100px;
  height: 40px;
  /* background: rgba(0, 0, 0, 0.1); */
  margin: 20px 0 0 25px;
  background-color: #14a17e;
  border-radius: 15px;
  border: none;
  color: white;
}
.two {
  width: 300px;
  /* background-color: pink; */
  margin-left: 100px;
}
.el-input__suffix-inner{
  position: absolute;
  right: 10px;
  top: 22px;
}
</style>