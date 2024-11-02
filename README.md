
---

# Yelp Microservices

This project implements a Yelp-like platform using Spring-based microservices. Users can explore and review businesses, enabling an experience similar to Yelp, where businesses and users interact through ratings and feedback.

## Project Overview

This application is structured as multiple Spring Boot microservices, each responsible for specific functionality. The services communicate via REST APIs, and each is independently deployable, providing flexibility and scalability.

## Microservices

1. **User Service**  
   Manages user profiles, authentication, and authorization. Supports user registration, profile updates, and secure login mechanisms.

2. **Business Service**  
   Handles business listings and information, including business categories, contact information, and location. Users can search and view details of businesses.

3. **Review Service**  
   Manages reviews and ratings for businesses. Users can submit reviews, rate businesses, and view ratings to help make informed decisions.

4. **Service Service**  
   Manages specific services offered by each business, allowing users to filter and view businesses based on the services they provide.

5. **Inventory & Product Service**  
   Keeps track of inventory and product availability for businesses offering tangible goods, ensuring users can see what’s available in real-time.

## Technology Stack

- **Java & Spring Boot**: For building and structuring the microservices.
- **Spring Cloud**: For service discovery, load balancing, and centralized configuration.
- **Spring Data JPA**: For database interaction in each service.
- **MySQL/PostgreSQL**: As the relational database for structured data.
- **Docker**: For containerizing each service to simplify deployment.

## Getting Started

### Prerequisites

- JDK 17+
- Docker & Docker Compose
- MySQL/PostgreSQL (or Docker for database setup)
- Postman (optional, for API testing)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MengseuThoeng/yelp-ms-learning.git
   cd yelp-ms-learning
   ```

2. Build and run the services using Docker:
   ```bash
   docker compose up --build
   ```

3. Access each service on its specified port. Verify health at:
   ```
   http://localhost:<service-port>/actuator/health
   ```

## API Documentation

API documentation is available via Swagger at each service endpoint:
```
http://localhost:<service-port>/swagger-ui.html
```

## Future Enhancements

- **Recommendation Engine**: Personalize business recommendations based on user behavior.
- **Messaging Queue**: Implement messaging for asynchronous processing between services.
- **Caching**: Use Redis for caching frequently accessed data, like popular businesses.

## License

This project is licensed under the SEU CLOAK.

---