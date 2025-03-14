import React from 'react'

export default function Demo() {
    return (
        <div>
            <footer class="bg-gray-100 px-4 sm:px-10 py-12 mt-20">
                <div class="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
                    <div class="lg:col-span-2">
                        <h4 class="text-xl font-semibold mb-6">About Us</h4>
                        <p>We provide an online laundry solution for both users and owners. Manage orders, track payments, and access admin and user dashboards seamlessly.</p>

                        <div class="bg-[#f8f9ff] flex w-10 gap-6 justify-between mt-4">
                            <img src="https://static.vecteezy.com/system/resources/previews/038/447/961/non_2x/ai-generated-instagram-logo-free-png.png" alt="" />
                            <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt=""/>
                            <img src="https://img.freepik.com/premium-vector/art-illustration_929495-41.jpg?semt=ais_hybrid" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz64RsWvjOoQcjVjLgbqigTeDo6xk1bDrpBX2blYbYyQq9oQ2XlSC7VjASJeBMLjybW-4&usqp=CAU" alt=""/>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xl font-semibold mb-6">Services</h4>
                        <ul class="space-y-5">
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Online Laundry Booking</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Order Management</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Payment Integration</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Admin & User Dashboard</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-xl font-semibold mb-6">Resources</h4>
                        <ul class="space-y-5">
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">FAQs</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Pricing</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">How It Works</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Customer Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-xl font-semibold mb-6">About Us</h4>
                        <ul class="space-y-5">
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Our Story</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Features</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Why Choose Us</a></li>
                            <li><a href="javascript:void(0)" class="hover:text-blue-600">Testimonials</a></li>
                        </ul>
                    </div>
                </div>

                <hr class="my-8 gray" />
            </footer>
        </div>
    )
}
