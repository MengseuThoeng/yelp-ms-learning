package kh.edu.cstad.business.feature.business;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/business")
public class BusinessController {

    @PreAuthorize("isAuthenticated()")
    @GetMapping("mengseu")
    Map<String, String> getBusiness() {
        return Map.of("name", "business");
    }
}
