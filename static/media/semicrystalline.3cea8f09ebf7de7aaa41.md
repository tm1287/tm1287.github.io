# **3D Printing of Dicyclopentadiene**

  

## Background

As part of the Zachariah Page Research Group at the University of Texas at Austin, I was involved in projects that aim to expand the capabilities of polymers through unique manufacturing techniques, typically using light as a stimulus. A more recent project of mine involved the design of a semicrystalline copolymer resin system. Through changes in resin composition, varying degrees of crystallinity can be achieved within a single object. With the addition of 3D printing techniques, these crystalline domains can be complexly patterned, creating objects with unique mechanical properties such as shape memory.

  

## Resin System

The resin system used in this project involves two acrylate monomers, stearyl and lauryl acrylate (SA and LA respectively). At room temperature, the crystallinity of the system increases as the relative proportion of stearyl acrylate increases. These acrylates were combined with a crosslinker and the photoinitiator phenylbis(2,4,6-trimethylbenzoyl)phosphine oxide (BAPO) to create a resin system that is highly responsive to 405 nm light.

In order to characterize the crystalline properties of this system, I performed a variety of qualitative trials involving resins with varying concentration of SA and LA. Through this we were able to determine to characterize the mechanical properties of the polymer as a function of composition using tensile testing and dynamic mechanical analysis.

Additionally, Fourier transform infrared spectroscopy and photorheology were used to characterize the curing behavior of the system in response to irradiation from 405 nm light. These experiments showed fast gelling and conversion (under 4 seconds), presenting a promising platform for 3D printing.

## 3D Printing
 
 In order 3D print an object with different crystalline domains at different points in the print, we had to add varying amounts of SA to LA in order to make the system more or less crystalline. In order to determine the amount of added acrylate, we would have to predict the current volume of the resin in the printing vat, since resin is consumed as each layer polymerizes onto the buildplate.

Since each layer in the print has a different area, and by extension a different volume when polymerizing, I created a python script to estimate the volume of resin consumed each layer. Since the image files that are projected on the DLP projector for each layer are simple photomasks, with the polymerized areas marked in white and and non polymerized areas marked in black, I could use simple computer vision to determine the cross-sectional area of each layer.

Using the computer vision library OpenCV, I was able to isolate the irradiated areas and detect the contours in each layer's projection image. Once I found the total area of each of the contours, I was able to multiply that area by the layer height in order to approximate the amount of resin that was consumed in that layer's creation.

By predicting the evolution of the vat volume as the print proceeded, I was able to accurately determine how much additional SA or LA was needed to bring the vat concentration to the desired level, which greatly aided the creation of prints with varying crystallinity.

Currently, work is being done on this project to achieve shape memory objects. These objects would be printed in a certain configuration, and can be cooled to induce crystallinity throughout the structure, locking the structure in a different configuration. However as the print comes back up to room temperature, the internal crystalline stress would allow the object to return back to the state that it was printed in.