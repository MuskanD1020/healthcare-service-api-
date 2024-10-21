const Service = require('c:/healthcare-service-api/models/Service');

const Service = require('../models/serviceModel');

// Add a new service
exports.addService = async (req, res) => {
  try {
    // Extracting fields from the request body
    const { name, description, price } = req.body;

    // Check if all required fields are provided
    if (!name || !price) {
      return res.status(400).json({ message: "Service name and price are required" });
    }

    // Creating a new service instance
    const newService = new Service({
      name,
      description,
      price
    });

    // Saving the new service to the database
    const savedService = await newService.save();
    
    // Sending response
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error });
  }
};


// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
