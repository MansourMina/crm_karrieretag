<template>
  <div>
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header ">
          <h3 class="modal-title text-center white" id="imageModalLabel">
            {{ i.title }}
          </h3>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            color="white"
          ></button>
        </div>
        <div class="modal-body p-0" >
          <img :src="i.url" class="img-fluid " />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    i: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
