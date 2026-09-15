import React from 'react'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Suspense } from 'react'
import Loader from '../components/Loader'
function Home(){
  const canvasRef = useRef(null);

  useEffect(() => {
    // creates a 3d scene and camera

    gsap.registerPlugin(ScrollTrigger);

    <Suspense fallback = {<Loader/>}>

    </Suspense>
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    //connects three js to camera
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    //reders the scene 
    animate()

    return () => renderer.dispose()

    gsap.to(camera.position, {
      z: 4,
      y: 2,
      scrollTrigger: {
        trigger: "#home-canvas",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },  
    });

  }, []);
  return <canvas ref={canvasRef} id="home-canvas" className="w-full h-full"></canvas>;
  {/*const Home = () => {
  return (
    <section className = "w-full h-screen relative"> 
      {/* <div className = "absolute top-28 left-0 z-10 flex items-center justify-center ">
        info popup
      </div>
      <canvas className = "w-full h-full" id = "home-canvas">

      </canvas>
    </section>
  
  )*/}


}
export default Home