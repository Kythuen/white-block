<template>
  <div absolute w="full" h="full">
    <canvas ref="RingCanvas" width="100%" height="100%"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const RingCanvas = ref()

onMounted(() => {
  ;(function () {
    const canvas = RingCanvas.value
    const context = canvas.getContext('2d')

    const settings = {
      r: 310,
      density: 500,
      leftWall: 0,
      rightWall: canvas.width,
      alpha: 0.0,
      maxAlpha: 1
    }

    const stars: any = {}
    let particleIndex = 0

    function getMinRandom() {
      const rand = Math.random()
      const step = Math.ceil(0.25 / (1 - rand)) // 越大越聚拢
      const arr = []
      for (var i = 0; i < step; i++) {
        arr.push(Math.random())
      }
      return Math.min.apply(null, arr)
    }

    function resizeCanvas() {
      canvas.width = 1536
      canvas.height = 1536
      settings.rightWall = canvas.width
      redraw()
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    function redraw() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.fillStyle = 'rgba(0,0,0,0)'
      context.fillRect(0, 0, canvas.width, canvas.height)
    }

    function Star() {
      this.angle = Math.random() * 360
      this.radius = Math.round((getMinRandom() * canvas.width) / 2) + settings.r
      this.x = Math.cos(this.angle) * this.radius + canvas.width / 2
      this.y = Math.sin(this.angle) * this.radius + canvas.height / 2
      this.speed = Math.random() * (1 - this.radius / canvas.width / 2) * 0.001

      this.particleSize = 1.25 + (Math.random() + 0.1 / 4)
      particleIndex++
      stars[particleIndex] = this
      this.alpha = (1 - this.radius / canvas.width / 2) * 0.001
      this.maxAlpha = 0.2 + (this.y / canvas.height) * Math.random() * 0.8
      this.alphaAction = 1
      this.color = getRandomColor()
    }

    Star.prototype.draw = function () {
      this.angle += 0.0015 + this.speed
      this.x = Math.cos(this.angle) * this.radius + canvas.width / 2
      this.y = Math.sin(this.angle) * this.radius + canvas.height / 2

      if (this.alphaAction === 1) {
        if (this.alpha < this.maxAlpha) {
          this.alpha += 0.005
        } else {
          this.alphaAction = -1
        }
      } else {
        if (this.alpha > 0.2) {
          this.alpha -= 0.002
        } else {
          this.alphaAction = 1
        }
      }

      context.beginPath()
      context.fillStyle =
        'rgba(' + this.color + ',' + this.alpha.toString() + ')'
      // context.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2, true);
      context.rect(this.x, this.y, this.particleSize, this.particleSize)
      context.closePath()
      context.fill()
    }

    function getRandomColor() {
      const colors = [
        '255,255,255',
        '255,255,255',
        '255,255,255',
        '255,255,255',
        '94,42,154',
        '94,42,154',
        '94,42,154',
        '255,255,255',
        '255,255,255',
        '143,41,58',
        '143,41,58',
        '255,255,0',
        '255,255,0'
      ]

      const randomIndex = Math.floor(Math.random() * colors.length)
      return colors[randomIndex]
    }

    function render() {
      redraw()

      if (Object.keys(stars).length > settings.density) {
        settings.density = 0
      }

      for (var i = 0; i < settings.density; i++) {
        if (Math.random() > 0.97) {
          new Star()
        }
      }

      // 星星实时移动
      for (const i in stars) {
        stars[i].draw()
      }

      requestAnimationFrame(render)
    }

    render()
  })()
})
</script>
