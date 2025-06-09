# Client/Testimonial
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80" -OutFile "images/client1.jpg"

# News/Featured
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1588776814546-ec7e1b1b1b1b?auto=format&fit=crop&w=600&q=80" -OutFile "images/news/featured.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" -OutFile "images/news/news1.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" -OutFile "images/news/news2.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" -OutFile "images/news/news3.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/news/newsletter-bg.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" -OutFile "images/news/news-hero-bg.jpg"

# Products
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=600&q=80" -OutFile "images/products/endoscope.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=600&q=80" -OutFile "images/products/endoscope-card.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" -OutFile "images/products/glucose-monitor.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" -OutFile "images/products/glucose-card.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" -OutFile "images/products/insulin-delivery.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80" -OutFile "images/products/insulin-card.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" -OutFile "images/products/products-hero-bg.jpg"

# Services
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/consultation.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/development.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/manufacturing.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/quality-control.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/quality.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/research-development.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/services-cta-bg.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/services-hero-bg.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" -OutFile "images/services/support.jpg"

# Solutions
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" -OutFile "images/solutions/solutions-feature.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" -OutFile "images/solutions/solutions-hero-bg.jpg"

# Tech
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" -OutFile "images/tech/manufacturing.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" -OutFile "images/tech/tech-cta-bg.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80" -OutFile "images/tech/tech-hero-bg.jpg"

# Careers
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80" -OutFile "images/careers/careers-hero-bg.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80" -OutFile "images/careers/team.jpg"

# --- AUTO-DETECT AND REPLACE INVALID/PLACEHOLDER IMAGES ---
# Define minimum valid image size (in bytes)
$minValidSize = 1000

# Get all jpg/jpeg/png images recursively
$images = Get-ChildItem -Path "images" -Recurse | Where-Object { $_.Extension -match '\.(jpg|jpeg|png)$' }

foreach ($img in $images) {
    # Replace if file is too small (likely placeholder/invalid)
    if ($img.Length -lt $minValidSize) {
        Write-Host "Replacing $($img.FullName) (size: $($img.Length) bytes) with AI-generated image..."
        # Pick Unsplash AI/medical/tech/people photo based on folder context
        $folder = Split-Path $img.DirectoryName -Leaf
        $unsplashUrl =
            if ($folder -eq "news")      { "https://source.unsplash.com/600x400/?medical,news" }
            elseif ($folder -eq "products")  { "https://source.unsplash.com/600x400/?medical,product" }
            elseif ($folder -eq "services")  { "https://source.unsplash.com/600x400/?medical,service" }
            elseif ($folder -eq "solutions") { "https://source.unsplash.com/600x400/?medical,solution" }
            elseif ($folder -eq "tech")      { "https://source.unsplash.com/600x400/?medical,technology" }
            elseif ($folder -eq "careers")   { "https://source.unsplash.com/600x400/?medical,team" }
            else { "https://source.unsplash.com/600x400/?medical" }
        Invoke-WebRequest -Uri $unsplashUrl -OutFile $img.FullName -UseBasicParsing
    }
}