<template>
    <!-- <div class="slide">
      <figure>
          <img src="img/img2.jpg" alt="">
          <figcaption>
          <div>
          <h5>Caption 1</h5>
          <p>Lorem ipsum dolor set amet, lorem, <a href="#">link text</a></p>
          </div>
          </figcaption>
      </figure>
    </div> -->

    <div>
      <div class="slide">
      <figure>
            <img src="@/assets/img.jpg" alt="">
            <figcaption>
              <div>
                <h5>Caption 2</h5>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              </div>
            </figcaption>
      </figure>
    </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      img_port: ''
    }
  },
  props: {
    imgUrl: {
      type: String
    }
  },
}
</script>

