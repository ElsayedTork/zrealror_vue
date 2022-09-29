<template>
  <section>
    <div>slider</div>
    <div>
      <h3>Renovated Apartment</h3>
      <p>
        <i class="fa-light fa-location-dot"></i> <span>New Cairo, Egypt</span>
      </p>
      <ul>
        <li>
          <img
            src="./../../../../assets/images/properties/bed.svg"
            alt=""
            srcset=""
          />
          <span>4 Beds</span>
        </li>
        <li>
          <img
            src="./../../../../assets/images/properties/bed.svg"
            alt=""
            srcset=""
          />
          <span>2 Baths</span>
        </li>
        <li>
          <img
            src="./../../../../assets/images/properties/bed.svg"
            alt=""
            srcset=""
          />
          <span>2500 Sqft</span>
        </li>
        <li>
          <img
            src="./../../../../assets/images/properties/bed.svg"
            alt=""
            srcset=""
          />
          <span>Wifi</span>
        </li>
      </ul>
      <div>
        <p></p>
        <custom-button text="View Details" btnClass="details"></custom-button>
      </div>
    </div>
  </section>
</template>
<script>
import CustomButton from './../../../shared/customButton';
export default {
  components: {
    CustomButton,
  },
};
</script>
<style scopd lang="details">
.details{
    background-color:var(--main-color) ;
    color: var(--white-color);
}
</style>
