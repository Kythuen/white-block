addEventListener('message', ({ data }) => {
  console.log(data)
  const canvas = data.canvas
  const context = canvas.getContext('2d')

  const stars: any = {}
  let starIndex = 0
  const settings = {
    density: 300,
    alpha: 0
  }
  function redraw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'rgba(0,0,0,0)'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  function Star(this: any) {
    this.x = Math.floor((Math.random() * 1.3 - 0.3) * canvas.width)
    this.y = Math.round(Math.random() * canvas.height)

    this.size =
      1 +
      Math.round(Math.random() * 1) * 0.5 +
      Math.round(Math.random() * 2.5) * 0.5

    this.speed = (2.5 - this.size) * (2.5 - this.size)
    starIndex++
    stars[starIndex] = this
    this.alpha = this.size === 1 ? 1 : 0.25 + Math.random()
    this.color = getRandomColor(this.size)
  }
  function getRandomColor(size: number) {
    const colors1 = ['255,255,255', '143,41,58', '143,41,58', '255,255,0']
    const colors2 = [
      '255,255,255',
      '143,41,58',
      '143,41,58',
      '143,41,58',
      '255,255,0'
    ]
    const colors = size > 2 ? colors2 : colors1
    const randomIndex = Math.floor(Math.random() * colors.length)

    return colors[randomIndex]
  }
  function renderStars() {
    redraw()

    for (const i in stars) {
      stars[i].draw()
    }

    requestAnimationFrame(renderStars)
  }

  const scale = window.devicePixelRatio || 1
  canvas.width = canvas.offsetWidth * scale
  canvas.height = canvas.offsetHeight * scale
  context.scale(scale, scale)

  // resizeCanvas()

  // window.addEventListener('resize', resizeCanvas)

  Star.prototype.draw = function () {
    this.x += (1 / this.size / 2) * 1.25
    this.y -= 1 / this.size

    if (this.x > canvas.width || this.y < 0) {
      this.x = Math.floor((Math.random() * 1.3 - 0.3) * canvas.width)
      this.y = Math.round(Math.random() * canvas.height) + canvas.height / 2
      this.size =
        1 +
        Math.round(Math.random() * 1) * 0.5 +
        Math.round(Math.random() * 2) * 0.5

      this.speed = (2.5 - this.size) * (2.5 - this.size)
    }

    context.beginPath()
    context.fillStyle = `rgba(${this.color},${this.alpha})`
    context.fillRect(this.x, this.y, this.size, this.size)
    // context.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
    // context.rect(this.x, this.y, this.size, this.size)
    // context.closePath()
    // context.fill()
  }

  for (let i = 0; i < settings.density; i++) {
    new (Star as any)()
  }
  renderStars()
})
