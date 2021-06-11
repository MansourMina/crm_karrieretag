<template>
  <div class="container py-5">
    <!-- For Demo Purpose -->
    <header class="text-center">
      <h1 class="display-4 py-4 font-weight-bold">INFORMATIONEN</h1>
      <p class="font-italic text-muted mb-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </header>

    <!-- DEMO 1 -->

    <div class="py-3 ">
      <div class="row justify-content-center">
        <div class="col-md-4 py-3" v-for="i of images" :key="i.id">
          <div
            class="content"
            @click="popUpImage(i)"
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
          >
            <div class="content-overlay"></div>
            <div>
              <img class="content-image imageK" :src="i.url" />
            </div>
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">{{ i.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-if="isImageVisible"
      class="modal fade"
      id="imageModal"
      tabindex="-1"
      :i="objectOfImage"
    />
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
  data() {
    return {
      isImageVisible: false,
      objectOfImage: null,
    };
  },
  props: {
    images: {
      type: Array,
    },
  },
  components: {
    // PopUpImage,
    Modal,
  },
  methods: {
    popUpImage(obj) {
      this.objectOfImage = obj;
      this.isImageVisible = !this.isImageVisible;
    },
  },
};
</script>
<style>
.title {
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
}

.imageK {
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}
body {
  min-height: 100vh;
  background-color: #fafafa;
}
</style>
