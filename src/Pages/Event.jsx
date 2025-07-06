import React, { useState } from 'react';
import eventImg from "../assets/beach.png"

function Event() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="min-h-screen bg-white p-10">
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 p-6">
        

        {/* Event Title */}
        <h1 className="text-4xl font-bold mb-3">Juhu Cleanup Drive</h1>
        <p className="text-gray-600 mb-6">
          Join us for a day of cleaning up the beautiful beaches of Mumbai and
          making a positive impact on our environment.
        </p>

        {/* Hero Image */}
        <div className="w-full h-96 overflow-hidden rounded-lg mb-10">
        <img src={eventImg} alt="Beach Cleanup" className="w-full h-5/8 object-cover" />
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("details")}
              className={`pb-4 font-medium cursor-pointer transition-colors ${
                activeTab === "details"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Event Details
            </button>
            <button
              onClick={() => setActiveTab("requirenment")}
              className={`pb-4 font-medium cursor-pointer transition-colors ${
                activeTab === "speakers"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Requirenments
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`pb-4 font-medium cursor-pointer transition-colors ${
                activeTab === "gallery"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Gallery
            </button>
          </div>
        </div>

        {/* Event Details Tab */}
        {activeTab === "details" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Event Details</h2>
                  <div className="space-y-4">
                    <div className="flex border-b border-gray-100 py-3">
                      <div className="w-1/3 text-gray-500">Cause</div>
                      <div className="w-2/3 font-medium">
                        Coastal Conservation
                      </div>
                    </div>
                    <div className="flex border-b border-gray-100 py-3">
                      <div className="w-1/3 text-gray-500">Location</div>
                      <div className="w-2/3 font-medium">
                        Juhu Beach, Mumbai
                      </div>
                    </div>
                    <div className="flex border-b border-gray-100 py-3">
                      <div className="w-1/3 text-gray-500">Date & Time</div>
                      <div className="w-2/3 font-medium">
                        Saturday, July 13, 2025, 9:00 AM - 12:00 PM
                      </div>
                    </div>
                    <div className="flex border-b border-gray-100 py-3">
                      <div className="w-1/3 text-gray-500">Organizer</div>
                      <div className="w-2/3 font-medium">
                        Green Mumbai Initiative
                      </div>
                    </div>
                    <div className="flex border-b border-gray-100 py-3">
                      <div className="w-1/3 text-gray-500">
                        Registration Fee
                      </div>
                      <div className="w-2/3">
                        <div className="font-medium">Free</div>
                        <div className="text-sm text-gray-500 mt-1">
                           refreshments provided
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">About the Event</h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    This event is part of the Green Mumbai Initiative's ongoing
                    efforts to protect and preserve the coastal ecosystems of
                    Mumbai. We aim to remove plastic waste and other pollutants
                    from Juhu Beach, raising awareness about the importance of
                    marine conservation.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">
                    What to Expect
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Guided cleanup activities led by environmental experts
                    </li>
                    
                    <li>Certificate of participation</li>
                    <li>Refreshments and water provided</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-6 mb-3">
                    What to Bring
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Comfortable clothes and footwear</li>
                    <li>Hat and sunscreen</li>
                    <li>Reusable water bottle</li>
                    <li>Positive attitude and energy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Registration Section */}
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-3 text-center">
                Join Our Cleanup Mission
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Be part of the change you wish to see. Together, we can make a
                difference!
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md whitespace-nowrap cursor-pointer hover:bg-blue-600 transition-colors">
                   Join as a Volunteer
                 </button>
                 <button className="px-6 py-3 border bg-blue-500 text-white font-medium rounded-md whitespace-nowrap cursor-pointer hover:bg-blue-50 transition-colors">
                   Join Non-Volunteer Activities
                 </button>
                 <button className="px-6 py-3  bg-blue-500 text-white font-medium rounded-md whitespace-nowrap cursor-pointer hover:bg-green-700 transition-colors">
                   Collaborate with Us
                 </button>
                 
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold mb-2">
                    Is there an age restriction for volunteers?
                  </h3>
                  <p className="text-gray-600">
                    Volunteers of all ages are welcome. However, children under
                    16 must be accompanied by an adult.
                  </p>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold mb-2">
                    What happens in case of bad weather?
                  </h3>
                  <p className="text-gray-600">
                    In case of inclement weather, the event may be rescheduled.
                    Registered participants will be notified via email.
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold mb-2">
                    Can I get a certificate for participating?
                  </h3>
                  <p className="text-gray-600">
                    Yes, all participants will receive a digital certificate of
                    participation after the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Requirenment */}
        {activeTab === "requirenment" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Event Organizers & Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Rajiv Mehta</h3>
                  <p className="text-gray-500 mb-3">
                    Marine Biologist, Mumbai University
                  </p>
                  <p className="text-gray-600 mb-4">
                    Leading researcher on marine ecosystems with special focus
                    on the impact of pollution on coastal biodiversity.
                  </p>
                  
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Priya Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
                  <p className="text-gray-500 mb-3">Community Organizer</p>
                  <p className="text-gray-600 mb-4">
                    Passionate about bringing communities together for
                    environmental causes and sustainable urban development.
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-3 text-center">
                Want to Join as a Speaker?
              </h2>
              <p className="text-center text-gray-600 mb-6">
                If you're an expert in environmental conservation and would like
                to share your knowledge, we'd love to hear from you.
              </p>
              
              <div className="flex justify-center">
                <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md whitespace-nowrap cursor-pointer hover:bg-blue-600 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">Beach Cleanup Equipment Checklist</h2>
      <ul className="list-disc list-inside space-y-4 text-gray-700">
        <li>
          <strong>Personal Protective Gear:</strong>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Reusable gloves (nitrile or rubber)</li>
            <li>Face masks</li>

            <li>Sun protection (hats, sunglasses, sunscreen)</li>
          </ul>
        </li>
        <li>
          <strong>Cleanup Tools:</strong>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Trash bags (biodegradable or large garbage bags)</li>
            <li>Segregation bags (for recyclables, e-waste, etc.)</li>
            <li>Trash pickers or grabbers</li>
            <li>Shovels and dustpans</li>
          </ul>
        </li>
        <li>
          <strong>Waste Management:</strong>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Labeled bins or containers</li>
            <li>Sharp object containers</li>
            <li>Weighing scale (to track waste)</li>
          </ul>
        </li>
        
        
      </ul>
    </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Event Gallery</h2>
            <p className="text-gray-600 mb-8">
              Images from our previous coastal cleanup events
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Beach Cleanup Volunteers"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Sorting Collected Waste"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Volunteer Group Photo"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Educational Workshop"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fbd29c5cd902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Before and After Cleanup"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Children Participating"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-3 text-center">
                Be Part of Our Next Photo Gallery
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Join our upcoming event and help us create more beautiful
                before-and-after stories.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md whitespace-nowrap cursor-pointer hover:bg-blue-600 transition-colors">
                  Join Event
                </button>
                <button className="px-6 py-3 border border-blue-500 text-blue-500 font-medium rounded-md whitespace-nowrap cursor-pointer hover:bg-blue-50 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      
    </div>
  )
}

export default Event
