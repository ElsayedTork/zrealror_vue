<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="./../../assets/images/properties/room.png"
          class="d-block w-100"
          alt=""
        />
      </div>
      <div class="carousel-item">
        <img
          src="./../../assets/images/properties/room1.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="./../../assets/images/properties/room.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="./../../assets/images/properties/room.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="./../../assets/images/properties/room.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <span class="Perimum">Perimum</span>
  </div>
</template>
<style scoped lang="scss">
.carousel-inner {
  .carousel-item {
    img {
      height: 220px;
      width: 100%;
    }
  }
}
.Perimum {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--orange-color);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--white-color);
  padding-inline: 12px;
  padding-block: 4px;
  border-radius: 4px;
}
.carousel-indicators {
  background-color: var(--opacityWhite-color);
  width: fit-content;
  margin-inline: auto;
  padding-inline: 8px;
  padding-block: 6px;
  border-radius: 10px;
}
.carousel-indicators button {
  background-color: transparent;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  transition: 0.3s transform ease-in-out;
}
.carousel-indicators [data-bs-target] {
  border: 2px solid var(--white-color);
  position: relative;
}
.carousel-indicators .active {
  border: 2px solid var(--white-color);
  position: relative;
  transform: scale(2);
  &::after {
    width: 4px;
    height: 4px;
    content: '';
    position: absolute;
    background-color: var(--white-color);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.carousel-control-prev-icon {
  background-image: url('./../../assets/icons/properties/cheavronLeft.svg');
  width: 10px;
  height: 10px;
}
.carousel-control-next-icon {
  background-image: url('./../../assets/icons/properties/cheavronRight.svg') !important;
  background-color: transparent;
  width: 12px;
  height: 12px;
}
.carousel-control-next,
.carousel-control-prev {
  width: 60%;
  align-items: flex-end;
  margin-block-end: 20px;
  opacity: 1;
}
</style>
