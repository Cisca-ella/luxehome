import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Section.css';
import Button from './Button'



export default function Section() {
    return(
        <div className='container'>
            <div className='div-p'>
                <p>Top new arrivals</p>
            </div>
            <div className='row scrollable-row'>
                <div className='col'>
                    <div className='grid-1'>
                    <div className='img-1'>
                    <img src="https://s3-alpha-sig.figma.com/img/0f37/017a/fe6fa5b7777340120a4d5f12dcc63e24?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qibvoWN4o2hsrdaNC1jrIof7sQdSn2lRChvWWivadQ8cnKjVl1PQJjdKoTIkuf9rjJ7q8gv~u4hWVd1FFa0xv-~bJ7CTjjxy9UpXO6Z6Q3VyylF18iTQrhF1bXsiEYJJpenDYKvVh8pxL6sPEqoGtST7lKJyef~iHUc4-drgEkjm0FrG6m80qqUXFFMJOCUo2GhfBCwQ4l4gMgp7OHF7piff2NnCDOk79Q8Y9Kt7M7y~qjM0S31LHkItn5qKQ7MHiGzjBlv1yk-EJiQ3~s8~PoA4DIqkQN5XHMDFiqB03y3IyKirJzalyS1H0PY4D60a7Y7Lrb2GNGIJgEaTVNaA0Q__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                    <div className='text-1'>
                        <p>LuxeHome PlushComfort King-Size 
                        Memory Foam Mattress – Ideal for 
                        Restful Sleep, Superior Support and 
                        Comfort</p>
                    </div>
                    <div className='price-div'>
                        <p>PRICE: NGN100,000</p>
                        <Button/>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='col'>
                <div className='grid-1'>
                    <div className='img-1'>
                    <img src="https://s3-alpha-sig.figma.com/img/83a2/9c46/d691bb987c437d3fcbb2264fdd26671c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3cC~LoAuEG2pt-TLxp-VSrf8sDGyUN3Yo-jncIDMHjQCX4rKsMV-d1jspDxYIyrrGp9kunAeaY-NrZSF6QJbVGZwiuazU~tpmk4v0AP4FA-3biXF1~FGu4lRMHXGuHwyOsEDujYwNm-zUdFra3soEJCwzWixSVnmoudU03BrVDlYzQl35LdejVcG22ljsZOkE~Xb6uDBqoOgIBJbnd9DxZUjBflHVidAPpUQgtfW3~qQzxLJTY6yLRDY4ft6ysfFnkCyRfPv2YUJpHphfj4oYGfYNOzuC3MkHnenbeFUmLZLlZ53FfQ01YEP5h9-hDKvmA5SfRpR8tSo8-8iBrtOw__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                    <div className='text-1'>
                        <p>EliteHome ChefPro 7-Piece Stainless Steel Kitchen 
                        Knife Set – Precision Cutting for Culinary Perfection, 
                        Ergonomic Design</p>
                    </div>
                    <div className='price-div'>
                        <p>PRICE: NGN45,000</p>
                        <Button/>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='col'>
                <div className='grid-1'>
                    <div className='img-1'>
                    <img src="https://s3-alpha-sig.figma.com/img/64d9/c9d0/bd43bfac064da2036882ce299eb27a8b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWX2Ed37KNih7xcS1kEkK5kCSB~4kdDvmg5ekm91UFAZHN3joHZvwDN8kJcpsJWgQAYd2~Azn33LIjRagk9JCMDJUaYitLtmNG694KXV0Pr6CDORGWbtEIUhrNsqjVM6OG2knSVTmyssv2FDJY2OzLtbqvCLZlDRZY6cqFNIfIYUzsjdLr7yBbUfpsAcYw8p7C9MzS5BxfjG6c9z~GBuB3siOCOrN28rADFkZxaulvCnQI7p3iwgay1XRZ52HWSxz-LnqvEPHoiemB5mhxCSdeUxcw6fhR5E13QDPPOJfRDfPRatl4Y6SDJQpvUKF1VAGnW9uY-JA~mAbl2LZqXqYg__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                    <div className='text-1'>
                        <p>ComfortPlus LoungeRelax Reclining Massage Chair – 
                        Ultimate Relaxation with Shiatsu Massage, 
                        Heat Therapy, and Adjustable Positions</p>
                    </div>
                    <div className='price-div'>
                        <p>PRICE: NGN210,000</p>
                        <Button/>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='col'>
                <div className='grid-1'>
                    <div className='img-1'>
                    <img src="https://s3-alpha-sig.figma.com/img/f820/85d3/bab47ed559623b793d1c68cf9ac2ba4f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AHQHGqa1CKP1Hwd3wth2niIDNDE3OcnbQUbGOav6s9dwmhvh5LHBbylLR81Al2PWNeRy2L6wbxok9WAY-Hly5GL5FqZYgOFVtdvx17TASjFQr8Pc~Qh5egy509foWjW3v04hRQSrtPTGXwRlh35qOUUffjlzA3af9Y5Qa0uYS-bCTSZEwQ1lCr0vixJxqcWy~kG9FlrO31uJw9nnil5fcvvbE~UXb7YuPCXemVitsFItM-tbIjAlfgEo6DO67BJv59E3unK7ZPLJkRUFNdBteOenUGhAOz3wyIgN-APzROChM2A7ddWGgKwI6X8Ij1AlUwJ8R~LK3lR5EXzT7y28EQ__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                    <div className='text-1'>
                        <p>RadiantGlow CrystalClear 5-Light Chandelier – 
                        Elegant Illumination for Luxurious Spaces
                        Dimmable LED Lights</p>
                    </div>
                    <div className='price-div'>
                        <p>PRICE: NGN150,000</p>
                        <Button/>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='col mt-5'>
                <div className='grid-1'>
                    <div className='img-1'>
                    <img src="https://s3-alpha-sig.figma.com/img/60a9/b077/73123e3a7316c027447e92c778a24de1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HuGE7yvWlPL~Mjo5Rrced~NNMoNSnyV49ihQHS5~XMe4OuGIe4tBWLa~3lLKRBRoVsUHrXX3t-DTt0ZFQ3cw97vcV7G8hUg80ODQKXOtPRUdTVWxoEmN5VXJCl1zjmRXTTjf18rkttvjZTAkooeHvqVN1CzXdYiFrWqAdY~taRHS9kvqQZRdAS7D~sF2m7DLuh1O-PKuwqqYs3NeZtp7mJO17gm2-P2fH05EmPBeaR18eXJ2dpJw0fU0z~1uUiAfqrbp2sobxknbeQ8XyFOHTU7PBzHqIO-eVkJ3bPFwcYXHt89fZFWt8qBLPRrjF13mulcvU20McmLvPF3Fn6OIsw__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                    <div className='text-1'>
                        <p>PrestigeHome TurboClean Pro Vacuum Cleaner –
                         Powerful Suction for Deep Cleaning, Lightweight 
                         and Easy Maneuverability</p>
                    </div>
                    <div className='price-div'>
                        <p>PRICE: NGN90,000</p>
                        <Button/>
                    </div>
                    </div>

                    </div>
                </div>


            </div>

            
                <div className='div-p mt-5'>
                    <p>Our Products</p>
                </div>

         <div className='row'>
             <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/5ab9/6822/b8eeeeef92a6deb63c2c2370ea71bf91?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8-7tl-wnKPvzGfo~DU2Wcf4VpjIZGIHEzAMGYPbtnezLAUgzrFc5ppqNSqCfHR~d6qh8dGmSodK308ByX0DixhzRT8HaYnOxuOCRZEMjLAZkfqcZA38C~FxIfMEbxE2wY31mBkwR0Ozhc8aAaZB7j8uQhwOCncTy6ABtXdBqx9RCxZGKZYTgF8KOV6qgHDCycgeYTfd~UNPdFaJhhZ76J9nNaYEYnCj0UXnGaapEg5vQgR~lYfK--RoElj~rooKDcgJuORIDoREV8CmVvzdXKqJYHUI~fDSRWnVKQQOI-A2FTXcn1Ih6D~D73vkH0uLYKqdPhlrw1B17XLtpksEkA__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                        <div className='text-2'>
                            <p>Sofa</p>
                        </div>
                         <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>
             <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/8a63/c46a/7166969333386ad1611fafdab10c6c88?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYuMo-~Z9Lz8Jl81wgHhOXz9QXuCdYMRMNDu-Y7pyEiF4k2tuK5rjbIvAKfoBf1PvWmbhZtVVy3jgmPF~rpIt70QSL4-JUR-ngRgPiOTjXUPFiwZTw7-EkG8gZmWmQHLVs6F2IzbWgyuF1LrmbJ1wFyCX1RLKKISEKhwPdJOn44WNrHYSfHR2bxnxmCyoajzrFrpjIxgNEe7lu-0b0U3LHrHDBv9cjwaz9JeM8OoRX7jtaQMkkfVQULInwkKBVL4nO7U4uPJHcBiTISp2aOmOL63PnHD81m~1V1XlhJm6Q-yhSJj~MX~2hp3tAglzVO-oM44NnUzNv3tBErtYPFeqQ__" alt="" srcset=""className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                    <div className='text-2'>
                            <p>Dinning Table Set</p>
                        </div>
                        <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>
             <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/0afa/539b/2ffd3c63bdbb9a5be49e0fb8a30faabb?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yj4X8wc0eCuCGxniezUMSCfhgIuRey8gTvanWvHW154mzW4fO11~ECgpZ3aPIAfj1f-g0~rbAZ-~9mncpFTED3LocK2DNsvf5cHy9P0mKSdqozFypuHQnGBsoXjiMw~oXC90PjJo1LUwitZFpupeaRMD9Xr5eGCarWuOsosVq6Gmxf0aZ4oSi04~KIuCNAIrce2ZzSKpx92oo8Umk6eI9ao-1zDJa90G27SVUaRfAO3xcNAafC2rGtA5J27TQ4ijVZs4zsyXAYQzhQICPAGsmjJWu4uIkja3roYxf7~PeSCapuun9LfuKt2YXT71OQ5Vxc7fPkvkNzgzb1EAVmFbcw__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                        <div className='text-2'>
                            <p>Kitchen Appliances</p>
                        </div>
                        <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>
             <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/0855/4915/771f387f6bceaaa24a5ca0593560e347?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xj06q7DpvsKn1cSq798oRr0P1G7TTxnlKv7NbZC99vIo3hmbVZnBX2JO8ILV1VtFAewheWQaF3Glc1E0mYB~rl6jTtNsxbSriWDGacbaWDbT~4kqD8kUODdJ9TMm-ZzZrewemFJxqJYwl6F37dB7OOvxEvqp2~-kdjdLR-jUjhoWNmBSwwSfzZFZxnNK7ZPwYamor-M0jEf-iKAb4dFSgv4bhh6pV82PZdoxWNydaKvqo35ssURRbyOa3GGRM-YIr1Z~HCdNV0yaLC1X2qY5wtvqY1xXqUiTzZHIUOvDbFEP8cLAzP-NLY9-mHk5-iTPO~t38-FjwKrUofZlaStLlw__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                        <div className='text-2'>
                            <p>BookShelves</p>
                        </div>
                        <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>
             
                
            
            </div>
            
            <div className='row mt-4'>
              <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/4f6b/a2ac/9de4f955843af37f2702809d34b7892b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rb0l5N1qb9q4-SFJ1dLLrV6a9IzOJ8m~bKYPd9bNjx8A25btoQO7VhndWqpHjFrKY4f4iwHrtP3dEWyuj4NWrLSeb1PmOdT-sELmX4ep-W1H5PuKDp5a2ZNCu9qgWHUPm88qceRWkoj8XsiUanb9yTh-VRQeq~Y1hl4bkBLgG2P67IKikVS91nzlb5IWD5aQQ8SItsWeDKFQdCwF9XaHYprw3y0UkLKd0hllMvh3iv0P0iQyH2xX45KZ~QcBx1aNGgCzZ2x0YAj-j9O0uHd~isBYN2r88fE9tfNo4lAHuLNBaOCpv-NUiDKkYEOnpqtLgboGbo~MLaOfi7VxYSx1vw__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                       <div className='text-2'>
                            <p>Tv Stand</p>
                        </div>
                        <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>
             <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/a550/d823/453704280683fff01884e226411cb139?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2xxKj22jrdOkJYUYYT44uXRemYf3n63REmhoDrGpUU3mCkZ-OXrJyemV1ZLCZBT3epN~qAduWEeThOKhNEqxVTC2KoL-6KBOfgujb8L-12M~g8y5Q1qum0dfwa617Gya~LhFVVvjsOWPbW~xH93H4MYtXh~xMr98U7k~q4thD8uFIbFYoC3W8dbNtis0RahjhJ5QW1S04rpdoJPQqf3O5UhedgdJIpWWcI4tq6a~i-Gtvdxl-D-i2za5FAU~aih7JxxsdOQdYjRhvsa~rGzeEXJINRFtjO5WKJYXf4c6F6VWpstGwzCB0J8tfxDy4mNRfg8OZThN1XizaMH5pz11w__" alt="" srcset=""className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                        <div className='text-2'>
                            <p>Washer and dryers</p>
                        </div>
                        <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>
             <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/aa75/ed39/81a84188a503de63706df5c6de9a6ac8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSTNXiS1gGBzcKzaex3kiBdvnQNMyLFSG6zyYl0KbnKQlL-5C~-tOZ-ZiQQJNe1DyGlg~IK7VZUJtgJYTQCrR8~h~5xE-CcggAywMK3ioQXS2qnqpR2VGQ4OwxdMRh34Zcyhcp~L3Yp8tiCwgaTMq6FLiGR81jo4-Ym1faDx9qE2xrRaJiIQUkmWeGe527kdXYOxv5uaj6hoIplQTB5fSl8Guk6sGeLedWRiOhHNCTTGF26g8JfGUaRu3lrh6JkBOguuOKqG8dMRBbBs~WlsAOIouuvQpFdlCr0tSL2PdILRSzOmP6YSAsjX-gaw~ROvqK0e7Ix8ZONJ7wgZp7P8uQ__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                        <div className='text-2'>
                            <p>Night Stand</p>
                        </div>
                        <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>
             <div className='col'>
                 <div className='grid-2'>
                    <div className='img-1'>
                        <img src="https://s3-alpha-sig.figma.com/img/e456/b28f/6dfca4e3c5c376eb47c68f762e2fc352?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2rmNVZ7W4PlJagvIpw0p19-mfn~GgZ4dWqeDDtipPlJbcf5EyOkRt3cjbqFUR7FTfhB3uFvyrhsIyAJ8rpaiJIkRs-fjPhgQxL-oxojXQ9aFESxHqVMf6kN2VKLh8BQLpj5HCnlyKYJGYdDlFf1Ww7T0Mjxi-O~76Rj7QVWcrUsV9n1sc9Qgnx7WftrRY-rHWtEE~N~~xaLwrH8pPRgWNGCU6VjnGxTezVH7in10bbjhGxQENqEiZj8pRXnGTOxdGn850QbTnknGtJZGjNWmHFjd8Geu~FC5tlSMzOH6tiG7WFTFrPfx5t-uemet5aiVDiWYpSydKxpQfNvfjSusw__" alt="" srcset="" className='img-fluid'/>
                    </div>
                    <div className='text-div'>
                        <div className='text-2'>
                            <p>Wardrobe</p>
                        </div>
                        <div className='price-div2'>
                            <button>Explore More</button>
                        </div>
                    </div>
                 </div>
             </div>

            </div>
            <div className='bt-div2'>
                <button className='show-more'>Show More</button>
            </div>

            
        </div>


    );
    
}